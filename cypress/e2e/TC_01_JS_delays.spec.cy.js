describe("Delay test spec", () => {
  it("validate text after 10 seconds", () => {
    cy.visit("javascript-delays/");
    cy.get("#start").click();
    cy.get("#delay", { timeout: 12000 }).should("have.value", "Liftoff!");
  });
});
