describe('template spec', () => {
  it('passes', () => {
    cy.setCookie('cookieconsent_status', 'dismiss')
    cy.setCookie('IDE','AHWqTUl9wXPQXk1lbrypJsIseKs5QrE7wD63HYNuTzN_OJEtDTTTQVk6JooqztAq')
    cy.visit('https://nordpass.com')

  })
})