/// <reference types="Cypress" />
 
describe('Implicit Assertions', () => {

    it('.should() - make an assertion about the current subject', () => {
      cy.visit('/')
      cy.contains('get').click()
       // Implicit assertion using should
       cy.get('#query-btn').should('contain','Button')
       // Chaining the assertion using and
       cy.get('#query-btn').should('contain','Button').and
       ('have.class','query-btn')
    })
})