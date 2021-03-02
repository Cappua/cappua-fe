context("UploadTrack", () => {
  it("contains upload and download icons", () => {
    cy.visit("http://localhost:3000/competitions");
    cy.get("<UploadTrack/>");
    cy.get(".fa-arrow-circle-down");
    cy.get(".fa-arrow-circle-up");
  });

  it("has upload functionality", () => {
    cy.visit("http://localhost:3000/competitions");
    cy.get(".fa-arrow-circle-up").click();
  });
  it("has download functionality", () => {
    cy.visit("http://localhost:3000/competitions");
    cy.get(".fa-arrow-circle-down").click();
  });
});
