///<reference types="cypress"/>

describe("additon of ages of users",()=>{
    it("validation of sum of ages",()=>{
        cy.visit("https://www.webdriveruniversity.com/index.html")
        cy.get('[href="Data-Table/index.html"]').invoke("removeAttr", "target").click()
        let userInfo = []
        let age = 0
        cy.get("#thumbnail-1 td").each((ele, index)=>{
            userInfo[index] = ele.text()
        }).then(()=>{
            for(let i=0; i< userInfo.length; i++){
                if(parseInt(userInfo[i])){
                    age = age + parseInt(userInfo[i])
                }
            }// 322
            cy.log(age)
            expect(age).to.eq(322)
        })
    })
})