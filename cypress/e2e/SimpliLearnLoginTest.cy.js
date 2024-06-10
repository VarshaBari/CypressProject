
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('This file will cover all the Login Test Scenarios  ', () => {
  
  beforeEach(() => {
    cy.visit('https://www.simplilearn.com/');
  })
  
  
  it('Validate login test', () => {
    cy.visit('https://www.simplilearn.com/');
    cy.get('.login').click();
    cy.get('.email').type("abc@xyz.com");
    cy.get('input#password').type('abcd123');
    cy.get('input#remember-me').click();
    cy.get('input[title=Login]').click();

    
    it('Validate Login Failure', () => {

      cy.get('a.login').click();
      cy.get('input.email').type('abc@xyz.com');
      cy.get('input#password').type('Abcd@123');
      cy.get('input#remember-me').click();
      cy.get('input[title="Login"]').click();
      cy.get('div#msg_box').contains('The email or password you have entered is invalid.');
    })
  

  })
})