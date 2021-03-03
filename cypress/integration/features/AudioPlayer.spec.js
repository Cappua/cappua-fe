context("AudioPlayer", () => {
  it("contains the audio player component", () => {
    cy.visit("http://localhost:3000/index.html");
    cy.get(".fa-bars").click();
    cy.get("div");
    cy.contains("Competitions").click();
    cy.contains("Wu Tang Forever");
  });
  it("Should have an audio file in the source attribute", () => {
    cy.visit("http://localhost:3000/index.html");
    cy.get(".fa-bars").click();
    cy.get("div");
    cy.contains("Competitions").click();
    cy.get("source");
  });
});
