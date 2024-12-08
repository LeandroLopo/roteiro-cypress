describe("TODOMvc App", () => {
  it("Verifica se app está abrindo", () => {
    cy.visit("");
  });

  it("Insere uma tarefa", () => {
    cy.visit("");

    cy.get("[data-cy=todo-input]").type("TP2 de Engenharia de Software{enter}");

    cy.get("[data-cy=todos-list]")
      .children()
      .should("have.length", 1)
      .first()
      .should("have.text", "TP2 de Engenharia de Software");
  });

  it("Insere e deleta uma tarefa", () => {
    cy.visit("");

    cy.get("[data-cy=todo-input]").type("TP2 de Engenharia de Software{enter}");

    cy.get("[data-cy=todos-list]").children().should("have.length", 1);

    cy.get("[data-cy=todos-list] > li [data-cy=remove-todo-btn]")
      .invoke("show")
      .click();

    cy.get("[data-cy=todos-list]").children().should("have.length", 0);
  });

  it("Filtra tarefas completas e ativas", () => {
    cy.visit("");

    cy.get("[data-cy=todo-input]")
      .type("TP2 de ES{enter}")
      .type("Prova de ES{enter}");

    cy.get("[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]")
      .first()
      .click();

    cy.get("[data-cy=filter-active-link").click();
    cy.get("[data-cy=todos-list]")
      .children()
      .should("have.length", 1)
      .first()
      .should("have.text", "Prova de ES");

    cy.get("[data-cy=filter-completed-link").click();
    cy.get("[data-cy=todos-list]")
      .children()
      .should("have.length", 1)
      .first()
      .should("have.text", "TP2 de ES");

    cy.get("[data-cy=filter-all-link").click();
    cy.get("[data-cy=todos-list]").children().should("have.length", 2);
  });



  //Novos testes implementados 


  it('Não adiciona tarefas vazias', () => {
    cy.visit('');
  
    cy.get('[data-cy=todo-input]')
      .type('{enter}'); // Tenta adicionar uma tarefa sem texto
  
    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 0); // Verifica que a lista ainda está vazia
  });

  it('Adiciona várias tarefas', () => {
    cy.visit('');
    
    cy.get('[data-cy=todo-input]')
      .type('TP1{enter}')
      .type('TP2{enter}')
      .type('TP3{enter}'); // Adiciona 3 tarefas
  
    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 3); // Verifica se 3 tarefas foram adicionadas
  });

  it('Marca uma tarefa como concluída', () => {
    cy.visit('');
    
    cy.get('[data-cy=todo-input]')
      .type('TP2 de Engenharia de Software{enter}'); // Adiciona uma tarefa
  
    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .click(); // Marca a tarefa como concluída
  
    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .should('be.checked'); // Verifica se a tarefa está marcada como concluída
  });
  
  


  

});
