

describe('My First Test', () => 
{
    it('Check Page Title', () => {
      cy.visit('http://www.google.com')
      cy.title().should('eq','Google')
    })


    it('Check Page Title Wrong', () => {
       try {
        cy.visit('http://www.google.com')
        cy.title().should('eq','Google9')
        cy.title().should('eq','Google')
       } catch (error) {
        console.log("entering catch block")
        console.log(error);
        console.log("leaving catch block")
       }
            
       
       
       
      })



      it('Check Page Title Correct', () => {
        cy.visit('http://www.google.com')
        cy.title().should('eq','Google')
        
      })


      it('Check Page Title Correct', () => {
        cy.visit('http://www.google.com')
        cy.title().should('eq','Google00')
        
      })

  })
