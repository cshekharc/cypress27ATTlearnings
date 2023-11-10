///<reference types="cypress"/>

describe("use of invoke method for remove attribure method",()=>{
    let contactData
    before(()=>{
        cy.fixture("example").then((data)=>{
            contactData = data
        })
    })
    it("fill up the form in same tab",()=>{ // same as function(){}
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get("#contact-us").invoke("removeAttr", "target").click()
        
        cy.get(".feedback-input").eq(0).type(contactData.firstName)
        // cy.wait(2000)
        cy.get('[placeholder="Last Name"]').type(contactData.lastName)
        // cy.wait(1000)
        cy.get("[class='feedback-input']").eq(2).type(contactData.email)
        cy.get('[name="message"]').type(contactData.comment)
        cy.get("[type='submit']").click()
    })
})