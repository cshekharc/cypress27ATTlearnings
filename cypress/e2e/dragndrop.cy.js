///<reference types="cypress"/>

describe("drag and drop",()=>{
    it("drag and drop element",()=>{
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get("#actions").invoke("removeAttr", "target").click()
        cy.get("#draggable").trigger("mousedown",{which :1})
        cy.get("#droppable").trigger("mousemove").trigger("mouseup",{force : true})
    })
})