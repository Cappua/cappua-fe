context("Olympus", () => {
  it("contains a hall of fame title", () => {
    cy.visit("http://localhost:3000/olympus");
    cy.get("<Olympus/>");
    cy.get("#olympus-title").should("have.text", "Hall Of FameOlympus");
  });

  it("contains an All click function to display all olympians", () => {
    cy.visit("http://localhost:3000/olympus");
    cy.get("#all-title").click();
    cy.get(".olympus-track");
    cy.get("#0");
    cy.get("#1");
  });

  it("contains a January click function to display all olympians", () => {
    cy.visit("http://localhost:3000/olympus");
    cy.get("#january-title").click();
    cy.get(".january");
    cy.get("#0");
  });

  it("contains a February click function to display all olympians", () => {
    cy.visit("http://localhost:3000/olympus");
    cy.get("#february-title").click();
    cy.get(".february");
    cy.get("#1");
  });
});
