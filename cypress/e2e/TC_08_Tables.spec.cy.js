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
  //Pagination test based on the dropdown selection

  it("Sortable Table : Pagination validation", () => {
    let entriesPerPage = 10;
    let totalNumberOfEntries = 25;

    TablesPage.selectEntriesPerPage(
      entriesPerPage
    ).ClickEachAndValidateNumberOfPages(
      Math.ceil(totalNumberOfEntries / entriesPerPage)
    );
  });

  //Sorting function test for table
  it.only("Sortable Table : validate sort functions", () => {
    //sort by rank

    TablesPage.sortByRankValidation();
  });
});
