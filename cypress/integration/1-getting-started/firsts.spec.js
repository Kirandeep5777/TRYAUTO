/// <reference types="cypress" />  

// above reference is the intellisense and it shows suggestions when we are using the cypress

describe('CustomSuite', function ()
{
 it('LoginTest-FirstCase', function ()
 {  
   cy.visit('https://admin-demo.nopcommerce.com/login');
   cy.get('input[name=Email]').type('admin@yourstore.com')
   cy.get('input[name=Password]').type('admin')
   cy.get('button[type=submit]').click()
  //  Assertion to verify the title
   cy.title().should('be.equal','Dashboard / nopCommerce administration')
  
 })
  
})