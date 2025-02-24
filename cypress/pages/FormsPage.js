class FormsPage {
  elements = {
    NameInput: () => cy.get("#name-input"),
    passwordInput: () => cy.get("input[type='password']"),
    drinkCheck: (drink) => cy.data_cy(drink),
    getDrinkList: () =>
      cy.get("#feedbackForm input[type='checkbox'][name='fav_drink']"),
    colorSelect: (color) => cy.data_cy(color),
    dropdownAutomation: () => cy.data_cy("automation"),
    submitButton: () => cy.data_cy("submit-btn"),
  };

  //   actions

  typeInNameInput(name) {
    this.elements.NameInput().type(name).should("have.value", name);
    return this;
  }

  typeInPasswordInput(password) {
    this.elements.passwordInput().type(password);
    return this;
  }

  checkDrink(drinkID) {
    this.elements.drinkCheck(drinkID).check().should("be.checked");
    return this;
  }
  selectColor(colorID) {
    this.elements.colorSelect(colorID).check().should("be.checked");
    return this;
  }

  checkAllDrinks() {
    this.elements.getDrinkList().each(($el) => {
      cy.wrap($el).check().should("be.checked");
    });

    return this;
  }

  selectAutomationDropdown(val) {
    this.elements.dropdownAutomation().select(val);

    this.elements
      .dropdownAutomation()
      .invoke("val")
      .then((actualValue) => {
        expect(actualValue).to.match(new RegExp(val, "i"));
      });

    return this;
  }

  clickSubmitButton() {
    this.elements.submitButton().click();
    return this;
  }
}

export default new FormsPage();
