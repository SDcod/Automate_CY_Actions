// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("data_cy", (locator) => {
  return cy.get(`[data-cy=${locator}]`);
});

Cypress.Commands.add("verifyAlert", (expectedText, alertButton) => {
  cy.window().then((win) => {
    cy.stub(win, "alert").as("alertStub");
  });
  // cy.on("window:alert", (str) => {
  //   expect(str).to.equal(expectedText);
  // });
  alertButton.click();

  cy.get("@alertStub").should("have.been.calledOnceWith", expectedText);
});

//Command to verify popup in both cases OK and Cancel
Cypress.Commands.add(
  "verifyConfirm",
  (expectedText, decision, confirmButton) => {
    cy.window().then((win) => {
      if (decision) {
        cy.stub(win, "confirm").returns(true).as("confirmStub");
      } else {
        cy.stub(win, "confirm").returns(false).as("confirmStub");
      }
    });

    confirmButton.click();

    cy.get("@confirmStub").should("have.been.calledOnceWith", expectedText);
  }
);
