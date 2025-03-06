class TablesPage {
  elements = {
    simpleTable: () => cy.get("figure>table"),
    simpleTableItem: (item) =>
      cy.get(this.elements.simpleTable).contains("td", item),

    sortableTable: () => cy.get("#tablepress-1"),
    sortableTableRowList: () => cy.get("#tablepress-1 > tbody > tr"),
    rankCol: () => cy.get("#tablepress-1 > tbody > tr > td:nth-child(1)"),
    countryCol: () => cy.get("#tablepress-1 > tbody > tr > td:nth-child(2)"),
    populationCol: () => cy.get("#tablepress-1 > tbody > tr > td:nth-child(3)"),
    entriesPerPageDropDown: () => cy.get('select[name="tablepress-1_length"]'),
    sortTableSearchBar: () => cy.get("input[id*='dt-search']"),
    rankHeadingBtn: () =>
      cy.get("span.dt-column-title").contains("Rank").parent("th"),
    countryHeadingBtn: () =>
      cy.get("span.dt-column-title").contains("Country").parent("th"),
    populationHeadingBtn: () =>
      cy
        .get("span.dt-column-title")
        .contains("Population (million)")
        .parent("th"),

    paginationPrevBtn: () =>
      cy.get('nav[aria-label="pagination"] button:nth-of-type(1)'),
    paginationNextBtn: () =>
      cy.get('nav[aria-label="pagination"] button:nth-last-of-type(1)'),

    numberOfPages: (expectedPages) => {
      function clickPage(index) {
        cy.get('nav[aria-label="pagination"] button[data-dt-idx]')
          .filter((index, el) => /^\d+$/.test(el.getAttribute("data-dt-idx")))
          .then(($pages) => {
            cy.wrap($pages).should("have.length", expectedPages);
            if (index < $pages.length) {
              cy.wrap($pages.eq(index)).click(); // Click on page number
              cy.wait(500); // Allow UI to update
              clickPage(index + 1); // Re-run function with next index
            }
          });
      }

      clickPage(0); // Start clicking from the first page
    },
  };

  validateItemPrice(itemKey, valueAssert) {
    this.elements
      .simpleTableItem(itemKey)
      .next()
      .should("have.text", valueAssert);
    return this;
  }

  selectEntriesPerPage(entries) {
    this.elements
      .entriesPerPageDropDown()
      .select(`${entries}`)
      .should("have.value", `${entries}`);

    return this;
  }
  ClickEachAndValidateNumberOfPages(expectedPages) {
    this.elements.numberOfPages(expectedPages);
    return this;
  }

  sortByRankValidation() {
    this.elements.rankHeadingBtn().as("rank_btn");

    this.elements.rankHeadingBtn().scrollIntoView();

    //1st click
    // validateAttribute("Rank: Activate to sort"); //initial state //first method has a different implementation.
    this.elements
      .rankHeadingBtn()
      .then(($el) => {
        expect($el).attr("aria-label", "Rank: Activate to sort");
      })
      .click();

    //2nd click
    validateAttribute("Rank: Activate to invert sorting");
    this.elements.rankCol().eq(0).should("have.text", "1");
    this.elements.rankHeadingBtn().click();

    //3rd click
    validateAttribute("Rank: Activate to remove sorting");
    this.elements.rankCol().eq(0).should("have.text", "25");
    this.elements.rankHeadingBtn().click();

    validateAttribute("Rank: Activate to sort"); //after complete sort cycle

    function validateAttribute(expected) {
      cy.get("@rank_btn")
        .invoke("attr", "aria-label")
        .should("eq", `${expected}`);
    }
  }
}

export default new TablesPage();
