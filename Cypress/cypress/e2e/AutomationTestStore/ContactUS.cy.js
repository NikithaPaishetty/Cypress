/// <reference types="cypress" />

describe(" Testing Contact Us via WebdriverUnit Website ", () => {
    it("User should be able to click on contactus form", () => {
      cy.visit("https://www.automationteststore.com/")
      //cy.get('.info_links_footer > :nth-child(5) > a').click()//it is with class name
       //cy.xpath("//a[contains( @href, 'contact' )]").click()
       cy.get("a[href$='contact']").click().then(function(linkText){
         cy.log("Clicked on link using text:" + linkText.text())
       })
      cy.get('#ContactUsFrm_first_name').type("Test")
      cy.get('#ContactUsFrm_email').type("test@cypress.com")
      cy.get('#ContactUsFrm_enquiry').type("Do you provide any discounts on bulk orders")
      cy.contains('Submit').click()
      cy.get('.mb40 > :nth-child(3)').should('have.text', "Your enquiry has been successfully sent to the store owner!")
      
   })
})