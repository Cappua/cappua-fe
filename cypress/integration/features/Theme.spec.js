context("Theme", () => {
    it("displays this month's theme is", () => {
      cy.visit("http://localhost:3000/competitions");
      cy.get("#month-theme").should("have.text", "March's Competition");
    });
});
