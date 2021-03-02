context("UploadTrack", () => {
  it("contains a user image, name and song title", () => {
    cy.visit("http://localhost:3000/");
    cy.get("<Trio/>");
    cy.get(".tab-img");
    cy.get("#tab-artist");
    cy.get("#tab-song");
  });

  it("contains a message to vote", () => {
    cy.visit("http://localhost:3000/");
    cy.get("<Trio/>");
    cy.get("#tab-vote").should("have.text", "Vote on the beat!");
  });

  it("has three buttons button that navigate to the competitions page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[id^=0]").click({ multiple: true });
    cy.location("pathname").should("eq", "/competitions");

    cy.visit("http://localhost:3000/");
    cy.get("[id^=1]").click({ multiple: true });
    cy.location("pathname").should("eq", "/competitions");

    cy.visit("http://localhost:3000/");
    cy.get("[id^=2]").click({ multiple: true });
    cy.location("pathname").should("eq", "/competitions");
  });
});
