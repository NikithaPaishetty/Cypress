/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(function () {
        cy.visit("/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
    })
    it("Check and validate checkbox", () => {
        cy.get(':nth-child(3) > .thumbnail > h2').should('have.text', "Checkboxe(s)")
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(5) > input').uncheck().should('not.be.checked')

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check()
        cy.get('@option-1').check().should('be.checked')

    })

    it("UnCheck and validate checkbox", () => {
        cy.get(':nth-child(3) > .thumbnail > h2').should('have.text', "Checkboxe(s)")
        // cy.get('#checkboxes > :nth-child(5) > input').uncheck().should('not.be.checked')

        cy.get('#checkboxes > :nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck()
        cy.get('@option-3').uncheck().should('not.be.checked')

    })

    it("MultipleCheck and validate checkbox", () => {
        cy.get(':nth-child(3) > .thumbnail > h2').should('have.text', "Checkboxe(s)")
        cy.get('#checkboxes > :nth-child(5) > input').uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    })
})