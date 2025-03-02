import { beforeEach } from "mocha";
import Homepage from "../../pages/Homepage";
import FormsPage from "../../pages/FormsPage";

describe("valid submission form test spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("validates form submission", () => {
    //visit the form page
    Homepage.clickFormFields();

    //perform form actions
    FormsPage.typeInNameInput("John Doe")
      .typeInPasswordInput("pass123")
      .checkAllDrinks()
      .selectColor("color4")
      .selectAutomationDropdown("Yes");

    cy.window().then((win) => {
      cy.stub(win, "alert").as("alertStub");
    });

    FormsPage.clickSubmitButton();

    cy.get("@alertStub").should(
      "have.been.calledOnceWith",
      "Message received!"
    );
  });
});
