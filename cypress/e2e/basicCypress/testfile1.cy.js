
describe("This is smoke suite for contact page",() => {
    it("visiting contact page directly",() => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get("[name='first_name']").type("shekhar")
        cy.get('[placeholder="Last Name"]').type("choudhari")
        cy.get("[name='email']").type('abc@email.com')
        cy.get('textarea[placeholder="Comments"]').type('testing comment')
        cy.get("input[value='SUBMIT']").click()
        // cy.get("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
    })
})
// [data-test="abc"]