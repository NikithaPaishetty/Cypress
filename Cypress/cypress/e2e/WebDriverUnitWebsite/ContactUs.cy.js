/// <reference types="cypress" />


describe(" Testing Contact Us via WebdriverUnit Website ", () => {
  it("User should be able to click on contactus form", () => {
    cy.visit("https://www.webdriveruniversity.com/")
    cy.get('#contact-us > .thumbnail > .section-title > h1').click()

  })

  it.only("User should be able to submit a successful submission via contactus form", () => {
    cy.visit("https://www.webdriveruniversity.com/")//parent tab
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })// by invoke method removing target attrbute bcoz to make target link open in same tab not in another tab.
    cy.url().should('include', 'https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name="first_name"]').type("Test")
    cy.get('[name="last_name"]').type("cypress")
    cy.get('[name="email"]').type("test@cypress.com")
    cy.get('[name="message"]').type("Testing child tab with Invoke")
    cy.get('[value="SUBMIT"]').click()
    cy.get('h1').should('have.text', "Thank You for your Message!")
  })

  it("User should be able to submit a successful submission via contactus form", () => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('include', 'WebDriver | Contact Us')
    cy.url().should('include', 'Contact-Us')
    cy.get('[name="first_name"]').type("Test")
    cy.get('[name="last_name"]').type("cypress")
    cy.get('[name="email"]').type("test@cypress.com")
    cy.get('[name="message"]').type("Testing child tab with Invoke")
    cy.get('[value="SUBMIT"]').click()
    cy.get('h1').should('have.text', "Thank You for your Message!")
  })

  it("User should not be able to submit a successful submission via contactus form", () => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
    cy.get('[name=first_name]').type("Test")
    cy.get('[name=last_name]').type("cypress")
    cy.get('[name=message]').type("Testing child tab with Invoke")
    cy.get('[value=SUBMIT]').click()
    cy.get('body').contains('Error: all fields are required')

  })

})