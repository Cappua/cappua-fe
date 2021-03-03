context("NavBar", () => {
  it("persist on every page", () => {
    cy.visit("http://localhost:3000/index.html");
    cy.get("<NavBar/>");
    cy.visit("http://localhost:3000/olympus");
    cy.get("<NavBar/>");
    cy.visit("http://localhost:3000/competitions");
    cy.get("<NavBar/>");
  });

  it("has side nav icon that opens sidenav-contents", () => {
    cy.visit("http://localhost:3000/olympus");
    cy.get(".fa-bars").click();
    cy.get("#sidenav-contents");
    cy.get("<User/>");
  });

  it("has side-nav contents that navigates to their corresponding pages", () => {
    cy.visit("http://localhost:3000/index.html");
    cy.get(".fa-bars").click();
    cy.get("a.olympus-sidenav").click();
    cy.location("pathname").should("eq", "/olympus");
    cy.get("a.competitions-sidenav").click();
    cy.location("pathname").should("eq", "/competitions");
  });
});
