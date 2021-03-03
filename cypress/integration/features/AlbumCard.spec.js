context("AlbumCard", () => {
  it("contains an image for cappua", () => {
    cy.visit("http://localhost:3000");
    cy.get("<AlbumCard/>");
  });
});
