import Homepage from "../../pages/Homepage";
import FormsPage from "../../pages/FormsPage";

describe("invalid submission form test spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("validates invalid form submission", () => {
    //visit the form page
    Homepage.clickFormFields();

    //perform form actions
    FormsPage.typeInPasswordInput("pass123")
      .checkAllDrinks()
      .selectColor("color4")
      .selectAutomationDropdown("Yes");

    cy.window().then((win) => {
      cy.stub(win, "alert").as("alertStub");
    });

    FormsPage.clickSubmitButton();

    cy.get("@alertStub").should("not.have.been.called");
  });
});
