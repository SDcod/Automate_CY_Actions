import Homepage from "../pages/Homepage";
import PopupsPage from "../pages/PopupsPage";

describe("Popups Test suite", () => {
  beforeEach(() => {
    cy.visit("/");
    Homepage.clickPopups();
  });
  //validate alert tests
  context("Alert Test spec", () => {
    it("validate alert popup", () => {
      //click alert button and verify the expected text.
      PopupsPage.verifyAlertPopup();
    });
  });

  //Validate confirm tests
  context("Confirm Test spec", () => {
    beforeEach(() => {
      cy.visit("/");
      Homepage.clickPopups();
    });
    it("validate confirm popup with : OK", () => {
      //click confirm button and verify the expected text when clicking OK.
      PopupsPage.verifyConfirmPopup("ok");
    });

    it("validate confirm popup with : Cancel", () => {
      //click confirm button and verify the expected text when clicking Cancel.
      PopupsPage.verifyConfirmPopup("Cancel");
    });
  });

  //Validate prompt tests
  context("Prompt Test spec", () => {
    beforeEach(() => {
      cy.visit("/");
      Homepage.clickPopups();
    });

    it("validate prompt popup with : OK", () => {
      //click prompt button and verify the expected text when clicking OK.
      PopupsPage.verifyPromptPopup(
        "Hi there, what's your name?",
        "ok",
        "John Doe"
      );
    });

    it("validate empty prompt popup with : OK", () => {
      //click prompt button and verify the expected text when clicking OK.
      PopupsPage.verifyPromptPopup("Hi there, what's your name?", "ok");
    });

    it("validate prompt popup with : cancel", () => {
      //click prompt button and verify the expected text when clicking cancel.
      PopupsPage.verifyPromptPopup("Hi there, what's your name?", "cancel");
    });
  });

  it.only("validate tooltip", () => {
    PopupsPage.clickToolTip();
  });
});
