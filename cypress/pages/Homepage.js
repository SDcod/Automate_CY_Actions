class Homepage {
  elements = {
    JSdelays: () => cy.contains("JavaScript Delays"),
    FormFields: () => cy.contains("Form Fields"),
    Popups: () => cy.contains("Popups"),
    Sliders: () => cy.contains("Sliders"),
    Calendars: () => cy.contains("Calendars"),
    Modals: () => cy.contains("Modals"),
    Tables: () => cy.contains("Tables"),
    WindowOperations: () => cy.contains("Window Operations"),
    Hover: () => cy.contains("Hover"),
  };

  //   actions

  clickJSdelays() {
    this.elements.JSdelays().click();
  }

  clickFormFields() {
    this.elements.FormFields().click();
  }

  clickPopups() {
    this.elements.Popups().click();
  }

  clickSliders() {
    this.elements.Sliders().click();
  }

  clickCalendars() {
    this.elements.Calendars().click();
  }

  clickModals() {
    this.elements.Modals().click();
  }

  clickTables() {
    this.elements.Tables().click();
  }

  clickWindowOperations() {
    this.elements.WindowOperations().click();
  }

  clickHover() {
    this.elements.Hover().click();
  }
}

export default new Homepage();
