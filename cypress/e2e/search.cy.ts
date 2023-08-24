describe("search", () => {
  it("can find a plant by tag", () => {
    cy.visit("/");
    cy.contains("Compare & contrast plants to buy").should("exist");

    cy.step("Enter a search term");
    const searchField = cy.get('[data-cy="search-field"]');
    cy.get('[data-cy="search-button"]').should("be.disabled");
    searchField.click().type("palm");
    cy.get("ul").contains("Parlour palm (1)").click();
    cy.get('[data-cy="search-field"]').should("have.value", "Parlour palm");
    cy.get('[data-cy="search-button"]').should("not.be.disabled");
  });
});
