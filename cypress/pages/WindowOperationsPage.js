class WindowPage {
  elements = {
    newTabBtn: () => cy.contains("b", "New Tab"),
    replaceWindowBtn: () => cy.contains("b", "Replace Window"),
    newWindowBtn: () => cy.contains("b", "New Window"),
  };

  //actions
  clickNewTab() {
    // this.elements.newTabBtn().invoke("removeAttr", "target").click();
    //if button is having target attribute

    cy.window().then((win) => {
      cy.stub(win, "open").callsFake(
        (url) => (win.location.href = "https://automatenow.io/")
      );
    });

    this.elements.newTabBtn().click();
  }
}

export default new WindowPage();
