/// <reference types="cypress" />  

it('carfinds',() =>
 {  
   cy.visit('https://automationtesting.co.uk/dropdown.html');

   cy.xpath('//select[@name="cars"]').select('Ford')
   cy.xpath('//select[@name="cars"]').select('Audi')
   cy.xpath('//select[@name="cars"]').select('BMW')
   cy.xpath('//select[@name="cars"]').select('Jeep')
   cy.xpath('//select[@name="cars"]').select('Suzuki')
   cy.xpath('//select[@name="cars"]').select('Mercedes')

   cy.title().should('be.equal','Dropdown Menus')
   })