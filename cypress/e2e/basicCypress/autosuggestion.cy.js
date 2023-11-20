///<reference types="cypress"/>

describe("auto suggetions for food items",()=>{
    it("validate the food item selected",()=>{
        cy.visit("https://www.webdriveruniversity.com/")
        cy.getAutocomplte().click()
        cy.getFoodItem("p")
        cy.getAutoSuggetions().each((foodItem)=>{
            if(foodItem.text()==="Pancakes"){
                cy.wrap(foodItem).click()
                cy.getSumitFoodButton().click()
                cy.url().should("include", "Pancakes")
            }

        })
    })
})
