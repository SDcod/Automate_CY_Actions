describe("form test spec", () => {
  it("validates form submission", () => {
    cy.visit("form-fields/");
    cy.get("#name-input").type("John Doe").should("have.value", "John Doe");
  });
});
