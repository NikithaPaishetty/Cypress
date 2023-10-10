/// <reference types="cypress" />

describe("Verify radio buttons via webdriveruni", () => {
  before(function () {
    cy.visit("https://www.webdriveruniversity.com/")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
  })
  it("Check specific radio buttons", () => {
    cy.get(':nth-child(4) > .thumbnail > h2').should('have.text', "Radio Button(s)")
    cy.get('#radio-buttons').find("[type='radio']").last().check()
    cy.get('#radio-buttons').find("[type='radio']").eq(2).check()

  })

  it("Validate the states of specific radio buttons", () => {
    cy.get(':nth-child(5) > .thumbnail > h2').should('have.text', "Selected & Disabled")
    cy.get("[value = 'lettuce']").should('not.be.checked')
    cy.get("[value = 'pumpkin']").should('be.checked')
    cy.get("[value = 'cabbage']").should('be.disabled')

    cy.get("[value = 'lettuce']").check().should('be.checked')
    cy.get("[value = 'pumpkin']").should('not.be.checked')
  })
})