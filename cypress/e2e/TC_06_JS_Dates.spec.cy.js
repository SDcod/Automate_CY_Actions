import Homepage from "../pages/Homepage";

describe("Date select with pagination", () => {
  beforeEach(() => {
    cy.visit("/");
    Homepage.clickCalendars();
  });
  it("select date with help of pagination", () => {
    selectDate("2024-01-15"); //yyyy-mm-dd
  });
});

//Utility function to handle pagination date in yyyy-mm-dd
function selectDate(date) {
  let [Tyear, Tmonth, Tday] = date.split("-");
  Tmonth = parseInt(Tmonth - 1);
  Tday = parseInt(Tday);

  cy.get("#g1065-2-1-selectorenteradate")
    .click({ force: true })
    .trigger("input");
  cy.wait(1000);
  cy.get("#ui-datepicker-div").should("be.visible");

  function navigateToTargetMonth() {
    cy.get(
      "#ui-datepicker-div > table.ui-datepicker-calendar tr>td[data-month][data-year]"
    )
      .eq(0)
      .then(($firstDay) => {
        let currentYear = $firstDay.attr("data-year");
        let currentMonth = $firstDay.attr("data-month");

        //Base condition
        if (currentYear === Tyear && currentMonth === Tmonth) {
          return; // Exit the function
        }

        if (
          currentYear > Tyear ||
          (currentMonth != Tmonth && currentYear == Tyear)
        ) {
          cy.get('#ui-datepicker-div a[data-handler="prev"]')
            .should("be.visible")
            .click();

          navigateToTargetMonth(); //Recursive call
        } else if (
          currentYear < Tyear ||
          (currentMonth != Tmonth && currentYear == Tyear)
        ) {
          cy.get('#ui-datepicker-div a[data-handler="next"]')
            .should("be.visible")
            .click();

          navigateToTargetMonth(); //Recursive call
        }
      });
  }

  navigateToTargetMonth(); //start navigating
  cy.get(
    `#ui-datepicker-div > table.ui-datepicker-calendar tr>td[data-month="${Tmonth}"][data-year="${Tyear}"]>a[data-date="${Tday}"]`
  ).click();
}
