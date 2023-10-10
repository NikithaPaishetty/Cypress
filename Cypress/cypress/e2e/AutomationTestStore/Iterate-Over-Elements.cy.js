/// <reference types="cypress" />

describe("Iterate over elements", () => {
    beforeEach(function (){
        cy.visit("https://www.automationteststore.com/")
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
    })
    it("Log information of all haircare products", () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index) => {
            cy.log("Index: " + index + $el.text())
        })
    })


    it("Add specific product to basket", () => {
        // cy.get('.fixed_wrapper .prdocutname').each(($el, index) => { 
        //     if ($el.text().includes('Eau Parfumee au The Vert Shampoo')) {
        //         cy.wrap($el).click()
        //     }
        // }) // Method used without Custom Commands
        cy.selectProduct('Eau Parfumee au The Vert Shampoo')
    })

    it("Add another specific product to basket", () => {
        cy.selectProduct('Seaweed Conditioner')
    })
})
