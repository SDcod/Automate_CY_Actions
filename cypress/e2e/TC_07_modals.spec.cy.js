import Homepage from "../pages/Homepage";

describe("modal Tests", () => {
  beforeEach(() => {
    cy.visit("/");
    Homepage.clickModals();
  });
  it("simple modal test", () => {
    cy.get("button").contains("Simple Modal").click();

    cy.get("#popmake-1318").should("be.visible");

    cy.get("#pum_popup_title_1318").should("include.text", "Simple Modal");

    cy.contains("Hi, I’m a simple modal");

    cy.get("#popmake-1318 > button").click();

    cy.get("#popmake-1318").should("not.be.visible");
  });

  it("modal with form test", () => {
    cy.get("button").contains("Form Modal").click();

    cy.get("#popmake-674").should("be.visible");

    cy.get("#popmake-674  #g1051-name")
      .should("be.visible")
      .type("john{enter}");

    cy.get("#popmake-674", { timeout: 8000 }).should("not.be.visible");
  });
});
