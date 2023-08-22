describe("template spec", () => {
  it("passes", () => {
    cy.visit('/');
    cy.contains("Compare & contrast plants to buy").should("exist");
  });
});
