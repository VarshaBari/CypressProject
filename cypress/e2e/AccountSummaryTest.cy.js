
import {LoginFunction} from "./CommonFunction.cy.js"

describe('Para bank Account Summary Scenarios', () => { 

    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      })

      it('Login Success', () => {
    
        LoginFunction('testuser','password');
        
        cy.get('h2').contains('Account Services');

       cy.xpath('//table//tr[1]/td[2]').contains('$515.50');
    
      })
    



})