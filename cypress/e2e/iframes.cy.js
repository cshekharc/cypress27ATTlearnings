///<reference types="cypress"/>

describe("validating iframe modal",()=>{
    it("Verify the message on modal",()=>{
        cy.visit("https://www.webdriveruniversity.com/index.html")
        cy.get("#iframe").invoke("removeAttr", "target").click()
        cy.get("#frame").then((newFrame)=>{
            const frame = newFrame.contents().find("body")
            cy.wrap(frame).as("thiswe")
            cy.get("@thiswe").find('[data-target="#myModal"]').click()
            cy.get("@thiswe").find("div.modal-body > p")
            .should("include.text", "laptops, game console")
        })
    })
})