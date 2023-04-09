/// <reference types="Cypress" />

describe('Explicit Assertions', () => {
    it('.should() - make an assertion about the current subject', () => {
      // test step to launch a URL
      cy.visit("/")
      // Explicit assertion
      expect(true).to.be.true
      let name = 'cypress';
      expect(name).to.be.equal('cypress')
      // Using Assert
      assert.equal(5, 5, 'Not Equal')
  
    })
  })