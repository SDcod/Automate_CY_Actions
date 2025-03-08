import Homepage from "../pages/Homepage";
import WindowPage from "../pages/WindowOperationsPage";

describe("window operations", () => {
  beforeEach(() => {
    cy.visit("/");
    Homepage.clickWindowOperations();
  });
  it("window operations : new Tab", () => {
    WindowPage.clickNewTab();
    //works only if the tag is anchor tag************
  });
});
