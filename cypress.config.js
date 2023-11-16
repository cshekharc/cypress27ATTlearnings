const { defineConfig } = require("cypress");
const fs = require("fs");
const exeltoJson = require("convert-excel-to-json");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task",{
        exeltoJson(filepath){
          const readFile = exeltoJson({
            source : fs.readFileSync(filepath)
          })
          return readFile;
        }
      })
      // implement node event listeners here
    },
  },
});


// task -- cy.task()