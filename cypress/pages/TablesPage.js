class TablesPage {
  elements = {
    simpleTable: () => cy.get("figure>table"),
    simpleTableItem: (item) =>
      cy.get(this.elements.simpleTable).contains("td", item),
  };

  validateItemPrice(itemKey, valueAssert) {
    this.elements
      .simpleTableItem(itemKey)
      .next()
      .should("have.text", valueAssert);
  }
}

export default new TablesPage();
