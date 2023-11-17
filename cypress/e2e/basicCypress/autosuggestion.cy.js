///<reference types="cypress"/>

describe("auto suggetions for food items",()=>{
    it("validate the food item selected",()=>{
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get("#autocomplete-textfield").invoke("removeAttr","target").click()
        cy.get("[placeholder='Food Item']").type("p")
        cy.get(".autocomplete-items >div").each((foodItem)=>{
            if(foodItem.text()==="Pancakes"){
                cy.wrap(foodItem).click()
                //foodItem.click()
                cy.get("#submit-button").click()
                cy.url().should("include", "Pancakes")
            }

        })
    })
})