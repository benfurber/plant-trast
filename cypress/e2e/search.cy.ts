describe("search", () => {
  it("can find a plant by tag", () => {
    cy.visit("/");
    cy.contains("Compare & contrast plants to buy").should("exist");
    cy.contains("I'd love your feedback").should("exist")

    cy.step("Enter a search term");
    const searchField = cy.get('[data-cy="search-field"]');
    searchField.click().type("palm");
    cy.get("ul").contains("Parlour palm (1)").click();
    cy.get('[data-cy="search-field"]').should("have.value", "Parlour palm");

    cy.step("Visit the tag page");
    cy.get('[data-cy="search-button"]').click()
    cy.url().should("include", "parlour-palm");
    cy.get('[data-cy="tag-title"').should("exist");
  });
});
