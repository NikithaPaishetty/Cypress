/// <reference types="cypress" />

describe("Iterate over elements", () => {
    it("Log information of all haircare products", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index) => {
            cy.log("Index: " + index + $el.text())
        })
    })


    it("Add specific product to basket", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index) => {
            if ($el.text().includes('Eau Parfumee au The Vert Shampoo')) {
                cy.wrap($el).click()
            }
        })
    })
})
