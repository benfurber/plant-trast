/// <reference types="cypress" />

describe('Name', () => {
  it('has the right name as the title of the homepage', () => {
    cy.visit('http://localhost:8000')

    const title = 'Plant-trast'
    const description = 'Compare & Contrast'

    cy.title().should('include', title)
    cy.title().should('include', description)
  })
})
