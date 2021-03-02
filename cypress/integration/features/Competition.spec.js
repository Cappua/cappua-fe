context("Competition", () => {
  it("contains div elements", () => {
    cy.visit("http://localhost:3000/competitions");
    cy.get(".track-page-container");
    cy.get(".theme-container");
    cy.get("<Theme />");
    cy.get("<AudioPlayer />");
    cy.get("<UploadTrack />");
    cy.get("<TrackNav />");
    cy.get("<TrackCards />");
  });

  it("contains Components", () => {
    cy.visit("http://localhost:3000/competitions");
    cy.get("<Theme />");
    cy.get("<AudioPlayer />");
    cy.get("<UploadTrack />");
    cy.get("<TrackNav />");
    cy.get("<TrackCards />");
  });
});
