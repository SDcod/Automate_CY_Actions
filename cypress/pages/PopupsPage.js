class PopupsPage {
  elements = {
    alertBtn: () => cy.get("#alert"),
    confirmBtn: () => cy.get("#confirm"),
    promptBtn: () => cy.get("#prompt"),
    tooltipBtn: () => cy.get(".tooltip_1"),
    confirmResult: () => cy.get("#confirmResult"),
    promptResult: () => cy.get("#promptResult"),
  };

  //   actions
  verifyAlertPopup() {
    cy.verifyAlert("Hi there, pal!", this.elements.alertBtn());
    return this;
  }

  verifyConfirmPopup(decision) {
    if (decision.toLowerCase() == "ok") {
      cy.verifyConfirm(
        "OK or Cancel, which will it be?",
        true,
        this.elements.confirmBtn()
      );

      //verify result text
      this.elements.confirmResult().contains("OK it is!");
    } else if (decision.toLowerCase() == "cancel") {
      cy.verifyConfirm(
        "OK or Cancel, which will it be?",
        false,
        this.elements.confirmBtn()
      );

      //verify result text
      this.elements.confirmResult().contains("Cancel it is!");
    } else {
      cy.log("Please pass correct decision in the test case : 'ok'/'cancel'");
    }
    return this;
  }

  verifyPromptPopup(expectedText, decision, promptText = "") {
    if (decision.toLowerCase() == "ok") {
      cy.verifyPromptPopup(
        expectedText,
        promptText,
        this.elements.promptBtn(),
        true
      );
      //verify result text conditionally based on prompt text
      if (promptText) {
        this.elements
          .promptResult()
          .contains(`Nice to meet you, ${promptText}!`);
      } else {
        this.elements.promptResult().contains("Fine, be that way...");
      }
    } else if (decision.toLowerCase() == "cancel") {
      cy.verifyPromptPopup(
        expectedText,
        promptText,
        this.elements.promptBtn(),
        false
      );
      //verify result text
      this.elements.promptResult().contains("Fine, be that way...");
    } else {
      cy.log("Please pass correct decision in the test case : 'ok'/'cancel'");
    }
    return this;
  }

  clickToolTip() {
    cy.get("#myTooltip").should("not.be.visible");
    this.elements.tooltipBtn().click();
    cy.get("#myTooltip").should("be.visible");
  }
}

export default new PopupsPage();
