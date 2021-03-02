context("TrackCards", () => {
  it("should have a trackcards-container", () => {
    cy.visit("http://localhost:3000/competitions");
    cy.get(".all-cards-container")
  });
});
