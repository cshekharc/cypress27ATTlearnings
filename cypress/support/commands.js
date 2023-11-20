// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add("getAutocomplte",() => {
    cy.get("#autocomplete-textfield").invoke("removeAttr","target")
})

Cypress.Commands.add("getFoodItem",(foodItem) => {
    cy.get("[placeholder='Food Item']").type(foodItem)
})

Cypress.Commands.add("getSumitFoodButton",()=>{
    cy.get("#submit-button")
})

Cypress.Commands.add("getAutoSuggetions",()=>{
    cy.get(".autocomplete-items >div")
})

Cypress.Commands.add("iframe",()=>{
    cy.get("#iframe").invoke("removeAttr", "target").click()
})

Cypress.Commands.add("getIntoIframe", () => {
    cy.get("#frame").then((newFrame) => {
        const frame = newFrame.contents().find("body")
        cy.wrap(frame).as("thiswe")
        cy.get("@thiswe").find('[data-target="#myModal"]').click()
        cy.get("@thiswe").find("div.modal-body > p")
            .should("include.text", "laptops, game console")
    })
})