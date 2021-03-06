context("User", () => {
  it("Should render correctly in NavBar", () => {
    cy.visit("http://localhost:3000/");
    cy.visit("http://localhost:3000/");
    cy.get(".fa-bars").click();
    cy.get("[data-cy=login-button]");
  });
  it("Should be able to login as a user", () => {
    cy.visit("http://localhost:3000/");
    cy.visit("http://localhost:3000/");
    cy.get(".fa-bars").click();
    cy.get("[data-cy=login-button]").click({ multiple: true, force: true });
  });
});
