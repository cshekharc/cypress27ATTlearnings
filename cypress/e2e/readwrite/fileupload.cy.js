///<reference types="cypress"/>

describe("file upload validations",()=>{
    it("validating file upload",()=>{
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get("#file-upload").invoke("removeAttr", "target").click()
        cy.get('[name="filename"]').selectFile("cypress/fixtures/datatext.txt")
        cy.get('[type="submit"]').click()
        cy.on("window:alert",(message)=>{
            expect(message).to.include("Your file has now been uploaded!")
        })
    })
})