describe("Input form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
    it("Test inputForm", () => {
      cy.get(".inputfrom").focus();
      cy.get(".inputfrom").type("Input Form assignment{enter}");
    });
    it("Test for adding new task", () => {
      cy.get("p").should("have.text", "Total item in list: 3");
      cy.get(".inputfrom").type("learn cypress{enter}");
      cy.get("p").should("have.text", "Total item in list: 4");
    });
    it("Each element Should have a checkbox", () => {
      cy.get(".check").should("exist");
      cy.get(".check:first").check();
      cy.get(".todo-Item:first").should("have.css", {
        TextDecoder: "line-through",
      });
    });
  
    it("should post api request", ()=>{
  
      cy.intercept("GET","http://localhost:8080/todos").as("todoPost");
      cy.wait("@todoPost");
      cy.get("p").should("have.text", "Total item in list: 4");
    });
  
    it("Each element Should have a delete button", () => {
      cy.get("#delete").should("exist");
      cy.get("#delete:last").click();
      cy.get("p").should("have.text", "Total item in list: 3");
    });
  
  
  
  })