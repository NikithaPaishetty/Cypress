/// <reference types="cypress" />


describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
      cy.visit("/")
      cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
      cy.url().should('include','Popup-Alerts')
      cy.get(':nth-child(2) > .thumbnail > h2').should('have.text', "JavaScript Alert")
      cy.get('#button1').click()

      cy.on('window:alert', (str) => {
        expect(str).to.equal('I am an alert box!')
      })
    })

    it("Validate js confirm alert box works correctly when clicking ok", () => {
        cy.visit("/")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
        cy.url().should('include','Popup-Alerts')
        cy.get(':nth-child(5) > .thumbnail > h2').should('have.text', "JavaScript Confirm Box")
        cy.get('#button4').click()
  
        cy.on('window:confirm', (str) => {
          return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    })

    it("Validate js confirm alert box works correctly when clicking cancel", () => {
        cy.visit("/")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
        cy.url().should('include','Popup-Alerts')
        cy.get(':nth-child(5) > .thumbnail > h2').should('have.text', "JavaScript Confirm Box")
        cy.get('#button4').click()
  
        cy.on('window:confirm', (str) => {
          return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    })

    it.only("Validate js confirm alert box works with stub", () => {
      cy.visit("/")
      cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
      cy.url().should('include','Popup-Alerts')
      const stub = cy.stub()
     cy.on('window:confirm', stub)
     cy.get('#button4').click().then(() =>{
      expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    }).then(()=>{
      return true; 
    }).then(() => {
      cy.get('#confirm-alert-text').contains('You pressed OK!')
    })
  })
})