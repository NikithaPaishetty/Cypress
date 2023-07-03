

describe('ORMG APPLICATION', () => {
  it('Login with valid crendentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-userdropdown-tab').click().wait(500)
    cy.contains('Logout').click()
    cy.get('.oxd-text--h5').should('have.text',"Login")
  })
  // it('Dashboard', () =>{
  //   cy.get('#oxd-main-menu-item active').click()
  // })
 })