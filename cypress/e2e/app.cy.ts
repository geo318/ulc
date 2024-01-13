describe('Page Loading and Navigation', () => {
  it('should navigate to home page', () => {
    cy.visit(`${Cypress.env('NEXT_PUBLIC_BASE_URL')}/en`, {
      failOnStatusCode: false,
    })

    context('720p resolution', () => {
      beforeEach(() => {
        cy.viewport(1280, 720)
      })

      it('displays full header', () => {
        cy.get('[data-test="switcher"]').click()
        cy.get('[data-test="switcher-dropdown"]').should('be.visible')
      })
    })

    // The new url should include "/about"
    // cy.url().should("include", "h-about");

    // The new page should contain an h1 with "About"
    cy.get('h1').contains('shipping')
  })
})
