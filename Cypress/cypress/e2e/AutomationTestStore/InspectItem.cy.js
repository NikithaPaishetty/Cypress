/// <reference types="cypress" />

describe("Inspect Automtion Test Store Items Using Chain Of Commands ", () => {
    it("User click on the first item using item header", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    })

    it.only("User click on the first item using item text", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
        console.log("Selected the following item:" + itemHeaderText.text())
        cy.log("Selected the following item:" + itemHeaderText.text())
        })
    })

    it("User click on the first item using index", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(5).click()
    })
})