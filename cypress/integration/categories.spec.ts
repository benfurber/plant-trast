/// <reference types="cypress" />

describe('Categories', () => {
  it('can be accessed through the homepage', () => {
    cy.visit('http://localhost:8000')

    const categoryLink = cy.contains('Pet Friendly')

    categoryLink.click()

    cy.url().should('include', 'pet-friendly')
  })
})
