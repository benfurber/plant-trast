describe("search", () => {
  it("can find a plant by tag", () => {
    cy.visit("/");
    cy.contains("Compare & contrast plants to buy").should("exist");

    cy.step("Enter a search term");
    const searchField = cy.get('[data-cy="search-field"]')
    searchField.click().type("palm");
    cy.get('ul').contains("Parlour palm").click();
    cy.get('[data-cy="search-field"]').should("have.value", "Parlour palm")
  });
});
