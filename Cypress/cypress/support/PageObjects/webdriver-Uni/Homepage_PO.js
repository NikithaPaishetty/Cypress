class HomePage_PO {
    visitHomepage() {
        cy.visit(Cypress.env("WebdriverUni_homepage"),{ timeout: 60000 });
    }
    clickOn_ContactUS_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    }
    
}
export default HomePage_PO;