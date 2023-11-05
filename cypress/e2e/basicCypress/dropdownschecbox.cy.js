///<reference types="cypress"/>

describe("Basic element testing",()=>{
    // hooks
    // beforeAll // afterAll
    // beforeEach // afterEach
    beforeEach(()=>{
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get("#dropdown-checkboxes-radiobuttons")
            .invoke("removeAttr", "target")
            .click() //{force: true}
    })
    it("Dropdown",()=>{ // same as function(){}
        cy.get("#dropdowm-menu-1").select(2).should("be.visible")
        cy.get("#dropdowm-menu-2").select("TestNG")
        // cy.get("#dropdowm-menu-2").click()
        // cy.contains("Cypress").click()
        cy.get("#dropdowm-menu-3").select("JavaScript").should("have.value", "javascript")
        cy.wait(1000)
        cy.get("#dropdowm-menu-3").select("jquery").should("include.text","JQuery")
    })

    it("Checkbox",()=>{ // same as function(){}
        
        cy.get("[value='option-1']")
            .should("not.be.checked")
            .and("have.attr","type")
            // .and("")
            .check()
              // click()
        cy.get("[value='option-3']")
            .should("be.checked")
            .uncheck()
            //.should("have.class", "section-title")
        
    })

    it("Radio buttons",()=>{
        cy.get('[value="yellow"]').check()
        cy.get('[value="purple"]').check()
    })
})