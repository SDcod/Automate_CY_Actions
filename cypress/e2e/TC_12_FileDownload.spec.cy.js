import Homepage from "../pages/Homepage";

describe("File download Suite", () => {
  beforeEach(() => {
    cy.visit("/");
    Homepage.clickFileDownload();
    cy.task("deleteDownloads");
  });

  it("File download", () => {
    cy.get(".wpdm-download-link").eq(0).click();

    const filePath = "cypress/downloads/test.pdf";

    cy.readFile(filePath, { timeout: 10000 }).should("exist");

    // Read and assert content inside the PDF
    cy.task("readPdf", { filePath }).then((pdfText) => {
      expect(pdfText).to.include("This is a sample PDF file.");
    });
  });
});
