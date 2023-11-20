const { defineConfig } = require("cypress");
const fs = require("fs");
const exeltoJson = require("convert-excel-to-json");
const csv = require("@fast-csv/parse");
// const writeToPath = require('@fast-csv/format');

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
      on("task",{
        // read csv
        readFromCsv(fileName){
          return new Promise((resolve) =>{
            let dataArray = []
            csv.parseFile(`${fileName}`, {headers:true})
            .on("data",(data)=>{
              dataArray.push(data)
            })
            .on('end', () =>{
              resolve(dataArray)
            })
          })
        }
      })

      // on("task",{
      //   // read csv
      //   writeToCsv(name, rows){
      //     writeToPath(`./${name}.csv`, rows)
      //     return null
      //   }
      // })
      // implement node event listeners here
    },
    baseUrl : "https://www.webdriveruniversity.com/",
    includeShadowDom : true
  },
});


// task -- cy.task()