///<reference types="cypress"/>

describe("Xcel to json converter", () => {
    const filepath = "C:/Users/Shekar/Downloads/testData.xlsx"
    it("Xcel to json converter", () => { // same as function(){}
        cy.task("exeltoJson", filepath).then((readData) => {
            cy.visit("https://www.webdriveruniversity.com/")
            cy.get("#contact-us").invoke("removeAttr", "target").click()
            //console.log(readData)
            // cy.log(readData.Sheet1[0].A).should("include.text", "firstName")
            cy.get(".feedback-input").eq(0)
                .type(readData.Sheet1[1].A)
                //.should("have.value", "firstName")
            // cy.wait(2000)
            cy.get('[placeholder="Last Name"]')
                .type(readData.Sheet1[1].B)
            // cy.wait(1000)
            cy.get("[class='feedback-input']").eq(2)
                .type(readData.Sheet1[1].C)
            cy.get('[name="message"]')
                .type(readData.Sheet1[1].D)
            cy.get("[type='submit']").click()
        })
    })
})