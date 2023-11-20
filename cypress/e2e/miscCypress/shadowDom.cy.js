
///<reference types="cypress"/>

describe("drag and drop",()=>{
    it("drag and drop element",()=>{
        cy.visit("https://www.lambdatest.com/selenium-playground/shadow-dom")
        // cy.get("#shadow_host")
        //     .shadow()
        //     .find("[placeholder='Name']")
        //     .type('abc')

        // cy.get("[placeholder='Name']").type("abc")
        cy.get("[placeholder='Name']",{includeShadowDom : true}).type("abc")
        
    })
})