/// <reference types="cypress" />  
describe('FinalProject', function ()
{
    before(function() {
        // TestCase 1:a) Login functionality
        cy.visit('https://automationteststore.com/');
        cy.xpath('//header/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/select[1]').select('Login')
        cy.get('#loginFrm_loginname').type('Kiran15')
        cy.get('#loginFrm_password').type('Anything')
        cy.get('button[title="Login"]').click()
      })
 it('TestCases', function ()
 {  
  // b) Verify that user lands on specific category page by clicking it.
   cy.title().should('be.equal','My Account')

  // TestCase 2: a) Viewing specific product, click on the specific product and view that product.  
   cy.get('i[title="Home"]').click()
   cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/section[1]/nav[1]/ul[1]/li[3]/a[1]').click()
   cy.title().should('be.equal','Makeup') 
   cy.xpath('//body/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/a[1]/img[1]').click()
  // b) Verify that on the page, correct title of the product is shown  
   cy.title().should('be.equal',"Tropiques Minerale Loose Bronzer") 

  // TestCase 3: a)Increase the QTY to 4 and click on Add to cart button. 
   cy.get('#product_quantity').clear()
   cy.get('#product_quantity').type('4')
   cy.xpath('//div[5]/ul[1]/li[1]/a[1]').click()
  //b) Verify that we land on web page having title SHOPPING CART. Click on Checkout button.
   cy.title().should('be.equal',"Shopping Cart")
   cy.get('#cart_checkout2').click() 
    
  // TestCase:4- a) Verify that you landed on the correct page, title “Checkout Confirmation” and click on confirm order button. 
   cy.title().should('be.equal',"Checkout Confirmation")
    cy.get('button[id="checkout_btn"]').click() 
  // b) Verify that this message is shown after clicking “Your Order has been processed!” 
    cy.title().should('be.equal',"Your Order Has Been Processed!")
  // c) Click on continue button.
    cy.get('a[title="Continue"]').click() 

  // TestCase 5- a) Verify that the order you placed is shown correctly under Account>> Check your order.
    cy.xpath('//header/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/select[1]').select('Account')
    cy.xpath('//body/div[1]/div[2]/div[1]/div[1]/div[1]/ul[1]/li[5]/a[1]').click()
    cy.title().should('be.equal',"My Order History")
    cy.get('#button_edit').click() 
})
})