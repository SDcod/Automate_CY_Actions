const { defineConfig } = require("cypress");

const fs = require("fs");
const pdf = require("pdf-parse");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);

      //Task to delete downloaded files.
      on("task", {
        deleteDownloads() {
          console.log("cleaning up previous downloads...");
          return new Promise((resolve, reject) => {
            fs.rm(
              "cypress/downloads",
              { recursive: true, force: true },
              (err) => {
                if (err) {
                  console.error("Failed to delete downloads folder:", err);
                  return reject(err);
                }
                console.log("Downloads folder cleaned successfully.");
                resolve(null);
              }
            );
          });
        },
      });

      on("task", {
        readPdf({ filePath }) {
          return new Promise((resolve, reject) => {
            fs.readFile(filePath, (err, data) => {
              if (err) {
                return reject(err);
              }

              pdf(data)
                .then((pdfData) => {
                  resolve(pdfData.text); //extract text from pdf
                })
                .catch((e) => reject(e));
            });
          });
        },
      });
    },
    baseUrl: "https://practice-automation.com/",
    defaultCommandTimeout: 6000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    retries: { openMode: 0, runMode: 2 },
    video: false,
    videoCompression: 32,
    watchForFileChanges: false,
  },
});
