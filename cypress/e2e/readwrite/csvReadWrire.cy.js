///<reference types="cypress"/>
describe("csv", () => {
    const fileName = "./cypress/fixtures/sample.csv"
    it("reading csv data", () => { // same as function(){}
        cy.task("readFromCsv", fileName).then((csvData) => {
            cy.log(csvData)
            cy.log(csvData[0])
        
            // cy.task("writeToCsv",{
            //     name: "test",
            //     rows : csvData
            // }) 
        })
    })
})