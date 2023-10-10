/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    it('Upload a file', () =>{
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#myFile').selectFile("cypress/fixtures/software-testing-internet-business-technology-concept-143071525.webp")
        cy.get('#submit-button').click()
    })

    it('Upload No file', () =>{
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#submit-button').click()
    })
})