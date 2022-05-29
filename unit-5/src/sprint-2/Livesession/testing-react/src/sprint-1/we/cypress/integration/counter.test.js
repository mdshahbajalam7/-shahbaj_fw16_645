{/* <Reference types="cypress"/> */}

describe("counter Tests",function(){
    it("Button should exists",function (){
        cy.visit("http://localhost:3000/");
        // cy.get(".counterBtn").should("exist");
        // cy.get("doesnexists").should("not.exst")
    })
})