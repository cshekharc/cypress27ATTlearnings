///<reference types="cypress"/>

describe("use of invoke method for remove attribure method",()=>{
    it("fill up the form in same tab",()=>{ // same as function(){}
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get("#contact-us").invoke("removeAttr", "target").click()
        
        cy.get(".feedback-input").eq(0).type("shekhar")
        // cy.wait(2000)
        cy.get('[placeholder="Last Name"]').type("choudhari")
        // cy.wait(1000)
        cy.get("[class='feedback-input']").eq(2).type('abc@email.com')
        cy.get('[name="message"]').type('testing comment',{ delay: 100 })
        cy.get("[type='submit']").click()
    })
})