/// <reference types="cypress" />  

describe('CustomizedSuite', function ()
{
 it('Question8', function ()
 {  
   cy.visit('https://automationteststore.com/');
   cy.xpath('//header/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/select[1]').select('Login')
   cy.get('#loginFrm_loginname').type('Kiran15')
   cy.get('#loginFrm_password').type('Anything')
   cy.get('button[title="Login"]').click()
  
  // assertion to check if landed on correct page
  cy.title().should('be.equal','My Account')

 })
  
})