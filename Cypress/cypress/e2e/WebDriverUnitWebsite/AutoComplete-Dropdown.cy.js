/// <reference types="cypress" />

describe("Verify Autocomplete dropdown lists via webdriveruni", () => {
    it("Select specific product via autocomplete list", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#myInput').type('B')
        cy.get('#myInputautocomplete-list > *').each(($ele, index, $list) => {
            const prod = $ele.text()
            const productToSelected = 'Bagels'

            if (prod === productToSelected) {
                $ele.trigger("click");

                cy.get('#submit-button').click()
                cy.url().should('include', productToSelected)
            }
        }).then(() => {
            cy.get('#myInput').type('g')
            cy.get('#myInputautocomplete-list > *').each(($ele, index, $list) => {
                const prod = $ele.text()
                const productToSelected = 'Grapes'
                if (prod === productToSelected) {
                    $ele.trigger("click");

                    cy.get('#submit-button').click()
                    cy.url().should('include', productToSelected)

                }
            })

        })
    })
})    