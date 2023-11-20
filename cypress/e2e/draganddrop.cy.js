///<reference types="cypress"/>

describe("drag and drop",()=>{
    it("drag and drop element",()=>{
        cy.visit("https://jqueryui.com/droppable/")
        cy.get(".demo-frame").then((dragFrame)=>{
            const frame = dragFrame.contents().find("body")
            cy.wrap(frame).as("dragframe")
            // cy.ge("@dragframe").find('[data-target="#myModal"]').click()
            cy.get("@dragframe").find("#draggable").trigger("mousedown",{which :1})
            cy.get("@dragframe").find("#droppable").trigger("mousemove").trigger("mouseup",{force : true})
            
        })
        
    })
})