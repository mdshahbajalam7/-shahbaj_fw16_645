/// <reference types="cypress"/> 

describe("counter Tests",function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000");
    });
    it("basic",function(){
        cy.intercept("GET","http://localhost:8000/counter",{
            value:100,
        })
        .as("counterreq")
    })
    cy.intercept("POST","http://localhost:8000/counter",{
        value:100,
    })
    .as("counterreq")

    // it("should open brower",function (){
    //     // cy.visit("http://localhost:3000");
    //     cy.get(".counterBtn").should("exist");
    //     cy.get(".doesnexists").should("not.exist")
    // });
    // it("should increment counter",function(){
    //     // cy.visit("http://localhost:3000");
    //     cy.get(".counterBtn").should("have.text","count is :0")
    //     cy.get(".counterBtn").click()
    //     cy.get(".counterBtn").should("have.text","count is :1")

    // });
    // it("should increment counter multiple time",function(){
    //     // cy.visit("http://localhost:3000");
    //     cy.get(".counterBtn").should("have.text","count is :0")
    //     cy.get(".counterBtn").click()
    //     cy.get(".counterBtn").click()
    //     cy.get(".counterBtn").click()
    //     cy.get(".counterBtn").click()
    //     cy.get(".counterBtn").click()
    //     cy.get(".counterBtn").should("have.text","count is :5")

    // });
    // it("should have red color",function(){
    //     // cy.visit("http://localhost:3000");
    //   cy.get("h3").should("have.css",{color:"red"})  


    // })
})