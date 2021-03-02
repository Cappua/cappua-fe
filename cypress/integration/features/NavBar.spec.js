context("NavBar", () => {
  it("persist on every page", () => {
    cy.visit("http://localhost:3000/");
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
    cy.visit("http://localhost:3000/");
    cy.get(".fa-bars").click();
    cy.get("a.olympus-sidenav").click();
    cy.location("pathname").should("eq", "/olympus");
    cy.get("a.competitions-sidenav").click();
    cy.location("pathname").should("eq", "/competitions");
  });

    // it("has user login ", () => {
    //   cy.visit("http://localhost:3000/");
    //   cy.get(".fa-bars").click();
    //   cy.get("<User/>").click();
    //   cy.location("pathname").should(
    //     "eq",
    //     "https://dev-e23-u4dy.us.auth0.com/u/login?state=g6Fo2SBNd3plT20zazhSTnVsYUU4NW85dEZrY3BNeXdLb3lfcqN0aWTZIE9La3hzLUplSFVZek0tM0lXeERqSW8tWVJaTFo0MzZwo2NpZNkgOXlPeVc2S21xMFg5dVUzYTZJdmZZT1RQenpTNlN0Qlg"
    //   );
    });