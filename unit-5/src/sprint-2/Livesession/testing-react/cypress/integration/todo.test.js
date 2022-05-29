describe("counter Tests",function(){
    beforeEach(function(){
        cy.visit("https://example.cypress.io/todo");
    });
    it.only("should show basic structure",function(){
        cy.get(".new-todo").should("exist")
        cy.get(".todo-count").should("exist")
        cy.get(".filters").should("exist")
        // cy.get(".new-todo").should("exist")

    });

    it.only("should be albe to add todo",function(){
        cy.get(".todo-list").children().should("have.length",2)
        cy.get(".new-todo").type("Automated tests{enter}")
        cy.get(".todo-list").children().should("have.length",3)
    })

})