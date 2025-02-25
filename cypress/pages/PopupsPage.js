class PopupsPage {
  elements = {
    alertBtn: () => cy.get("#alert"),
    confirmBtn: () => cy.get("#confirm"),
    promptBtn: () => cy.get("#prompt"),
    tooltipBtn: () => cy.get(".tooltip_1"),
    confirmResult: () => cy.get("#confirmResult"),
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
}

export default new PopupsPage();
