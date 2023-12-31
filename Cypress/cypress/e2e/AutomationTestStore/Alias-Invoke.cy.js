/// <reference types="cypress" />

describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').eq(1).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.greaterThan', 6)
        cy.get('@productThumbnail').should('include', 'Eau Parfumee au The Vert Shampoo')
    })

    it("Validate product thumbnail", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })


    it.only("Calculate total no of normal and sale products", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.thumbnail').as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el,index,$list)=>{
        //     cy.log($el.text())
        // }) 

        cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('@productThumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0
        cy.get('@itemPrice').then($linkText => {
            var iteamPriceTotal = 0
            var itemPrice = $linkText.split('$')
            var i
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                iteamPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += iteamPriceTotal
            cy.log("Non-sale price of iteams total: " + iteamPriceTotal)
        })

        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPrice = 0
            var saleItemPrice = $linkText.split('$')
            var i
            for (i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                saleItemsPrice += Number(saleItemPrice[i])
            }
            itemsTotal += saleItemsPrice
            cy.log("Sale price of iteams total: " + saleItemsPrice)
        })
        .then(() => {
            cy.log("The total price of all produts:" + itemsTotal)
            expect(itemsTotal).to.equal(656.5)
        })

    })
})