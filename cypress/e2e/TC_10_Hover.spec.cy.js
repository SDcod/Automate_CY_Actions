import Homepage from "../pages/Homepage";

describe("hover", () => {
  it("hover and validate the text change", () => {
    cy.visit("/");
    Homepage.clickHover();

    cy.get("#mouse_over").should("have.text", "Mouse over me");
    cy.get("#mouse_over").trigger("mouseover").invoke("change");
    cy.get("#mouse_over").should("have.text", "You did it!");
  });
});
