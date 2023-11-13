///<reference types="cypress"/>

describe("write and read file in cypress",()=>{
    it("write the file",()=>{
        cy.writeFile("./cypress/fixtures/test.txt", "generating from the cypress")
        cy.writeFile("./cypress/fixtures/testdata.json", {firstName: "myName"} )
    })

    it("reading a file",()=>{
        cy.readFile("./cypress/fixtures/test.txt").should("contains", "generating from the cypress")
        cy.readFile("./cypress/fixtures/testdata.json").should("have.property", "firstName")
    })
})