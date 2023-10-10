import HomePage_PO from "../../support/PageObjects/webdriver-Uni/Homepage_PO";

/// <reference types="cypress" />


describe(" Testing Contact Us via WebdriverUnit Website ", () => {
  before(function(){
    cy.fixture('example').then(function(data){
      // this.data = data
      globalThis.data = data;
    })
  })
  beforeEach(function () {
    cy.visit(Cypress.env("WebdriverUni_homepage") + "/Contact-Us/contactus.html")
    cy.visit("https://www.webdriveruniversity.com/")
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })

    // const hompage_PO = new HomePage_PO()
    // hompage_PO.visitHomepage()
    // hompage_PO.clickOn_ContactUS_Button()
   
})

  xit("User should be able to click on contactus form", () => {
    cy.visit("/")
    cy.get('#contact-us > .thumbnail > .section-title > h1').click()

  })

  it("User should be able to submit a successful submission via contactus form", () => {
    cy.visit("https://www.webdriveruniversity.com/")//parent tab
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })// by invoke method removing target attrbute bcoz to make target link open in same tab not in another tab.
    cy.url().should('include', 'https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    // cy.get('[name="first_name"]').type(data.first_name)
    // cy.get('[name="last_name"]').type(data.last_name)
    // cy.get('[name="email"]').type(data.email)
    // cy.get('[name="message"]').type("Testing child tab with Invoke")
    // cy.get('[value="SUBMIT"]').click()
    // cy.get('h1').should('have.text', "Thank You for your Message!")

    cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"),data.last_name,data.email,"Testing child tab with Invoke",'h1','Thank You for your Message!')

  })

  xit("User should be able to submit a successful submission via contactus form", () => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('include', 'WebDriver | Contact Us')
    cy.url().should('include', 'Contact-Us')
    cy.get('[name="first_name"]').type(data.first_name)
    cy.get('[name="last_name"]').type(data.last_name)
    cy.get('[name="email"]').type(data.email)
    cy.get('[name="message"]').type("Testing child tab with Invoke")
    cy.get('[value="SUBMIT"]').click()
    cy.get('h1').should('have.text', "Thank You for your Message!")
  })

  it("User should not be able to submit a successful submission via contactus form", () => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
    // cy.get('[name=first_name]').type(data.first_name)
    // cy.get('[name=last_name]').type(data.last_name)
    // cy.get('[name=message]').type("Testing child tab with Invoke")
    // cy.get('[value=SUBMIT]').click()
    // cy.get('body').contains('Error: all fields are required')
    cy.webdriverUni_ContactForm_Submission(data.first_name,data.last_name," ","Testing child tab with Invoke",'body','Error: Invalid email address')

  })

})