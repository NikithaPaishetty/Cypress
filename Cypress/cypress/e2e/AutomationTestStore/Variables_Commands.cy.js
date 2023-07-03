/// <reference types="cypress" />

describe("Verifying variables,cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/")

        //The following will Pass and not recommended approach
        // const MakeUpLink = cy.get('a[href*="product/category&path="]').contains('Makeup')
        // const SkinCareLink = cy.get('a[href*="product/category&path="]').contains('Skincare')
        // MakeUpLink.click()
        // SkinCareLink.click()


        //The following will Pass and not recommended approach
        // const MakeUpLink = cy.get('a[href*="product/category&path="]').contains('Makeup')
        // MakeUpLink.click()
        // const SkinCareLink = cy.get('a[href*="product/category&path="]').contains('Skincare')
        // SkinCareLink.click()


        //Recommended Approach
        cy.get('a[href*="product/category&path="]').contains('Makeup').click()
        cy.get('a[href*="product/category&path="]').contains('Skincare').click()
    })

    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('a[href*="product/category&path="]').contains('Makeup').click()

        //Following code will fail
        // const header = cy.get('.maintext')
        // cy.log(header.text())

        cy.get('.maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text:" + headerText)
            expect(headerText).is.eql("Makeup")
        })

    })

    it.only("Validate properties of the Contact Us Page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            //Embedded commands(Closuer)
            cy.get('#field_11').then(fNtext => {
                cy.log(fNtext.text())
                cy.log(fNtext)
            })


        })

    })

})