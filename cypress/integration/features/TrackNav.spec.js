context("TrackNav", () => {
  it("contains TrackNav component", () => {
    cy.visit("http://localhost:3000/competitions");
    cy.get("<TrackNav/>");
  });

  it("contains a title", () => {
    cy.visit("http://localhost:3000/competitions");
    cy.get(".the-ranks-title").should("have.text", "- The Ranks -");
  });

  it("has a search bar", () => {
    cy.visit("http://localhost:3000/competitions");
    cy.get(".search-btn").click()
    cy.get('.search-input')
  });
  it("has a filter bar", () => {
    cy.visit("http://localhost:3000/competitions");
    cy.get(".track-sort-dropdown")
    cy.get("[value^=newest]").should("have.text", "Newest");
    cy.get("[value^=oldest]").should("have.text", "Oldest");
    cy.get("[value^=a-z]").should("have.text", "A-Z");
    cy.get("[value^=z-a]").should("have.text", "Z-A");
  });
});
