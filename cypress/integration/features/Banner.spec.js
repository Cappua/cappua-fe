context("Banner", () => {
  it("displays Cappua is a place where artists lyrically fight to the death", () => {
    cy.visit("http://localhost:3000/index.html");
    cy.get(".banner-container");
    cy.get(".banner").should(
      "have.text",
      "Cappua is a place where artists lyrically fight to the death"
    );
  });
});
