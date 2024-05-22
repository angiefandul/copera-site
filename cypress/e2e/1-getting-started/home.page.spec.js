/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Exploring the Home Page", () => {
    cy.get("#submenu")
      .contains("Learn About My Benefit")
      .click({ force: true })
      .should("have.text", "Learn About My Benefit");
    cy.get("h3").each(($el) => {
      if ($el.text() === "Tax-Deferred Interest") {
        cy.wrap($el).click();
      }
    });
    cy.url().should("contain", "tax-deferred-interest");
    cy.get("h2").should("contain", "Tax-Deferred Interest");
    //Select in the web table
    cy.get("tbody")
      .contains("tr", "July 1, 2004-December 31, 2008")
      .then((tableRow) => {
        cy.wrap(tableRow)
          .find("td p")
          .then(($cell) => {
            const interestRate = $cell.text().trim();
            expect(interestRate).to.equal("5.00%");
          });
      });

    cy.contains("Calculators").click();
    cy.wait(500);
    cy.contains("Termination Options").click();
    })   
  });

  it.only("Second test", () => {


  })

