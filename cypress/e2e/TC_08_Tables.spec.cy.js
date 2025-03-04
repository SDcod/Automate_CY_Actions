import Homepage from "../pages/Homepage";
import TablesPage from "../pages/TablesPage";

describe("Tables suite", () => {
  beforeEach(() => {
    cy.visit("/");
    Homepage.clickTables();
  });
  it("validate item price in a Simple tables", () => {
    //below method searches the item and validate the value of it according to the table row

    TablesPage.validateItemPrice("Laptop", "$1200.00");
    TablesPage.validateItemPrice("Marbles", "$1.25");
  });

  it("validate functionality of sortable table");
});
