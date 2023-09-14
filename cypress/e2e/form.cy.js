describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io');
  })


  it('passes', () => {
    cy.visit('https://example.cypress.io');
  })


  it('adding text to input and submit the form ',  () =>{
    cy.get('[data-cy="title"]')
        .type("sadia")
        .should('have.value',"sadia")
     cy.get('[data-cy=body]')
         .type("first test")
         .should('have.value',"first test")
     cy.get('[data-cy=email]')
         .type("test@test.com")
         .should('have.value',"test@test.com")
     cy.get('[data-cy=password]')
         .type("password123")
         .should('have.value',"password123")
     cy.get('[data-cy=terms]')
         .check()
         .should('be.checked' )
     cy.get('[data-cy="submit"]').click()
 });


})