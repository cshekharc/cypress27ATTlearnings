///<reference types="cypress"/>

describe("different alert message validation",() => {
    beforeEach("Visiting alert page",() => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get("#popup-alerts").invoke("removeAttr", "target").click()
    })
    it("just an alert message verification",() => {
        
        cy.get("#button1").click()
        cy.on("window:alert",(textOnalert) =>{
            expect(textOnalert).to.include("I am an alert box!")
        })
    })
    // })
    it("confirm alert verification",() => {
     
        cy.get("#button4").click()
        cy.on("window:confirm",(msgOnAlert) =>{
            expect(msgOnAlert).to.include("Press a button!")
            return true
        })
        cy.get("#confirm-alert-text").should("include.text","You pressed OK!")
    })
    it("confirm alert with cancel verification",() => {
        cy.get("#button4").click()
        cy.on("window:confirm",(msgOnAlert) =>{
            expect(msgOnAlert).to.include("Press a button!")
            return false
        })
        cy.get("#confirm-alert-text").should("include.text","You pressed Cancel")
    })
})

// in chai assertion lib we have should and expect key words