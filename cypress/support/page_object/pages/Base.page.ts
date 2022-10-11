interface IPage {
  visit(url: string): Cypress.Chainable<Cypress.AUTWindow>;
}

export default abstract class BasePage implements IPage {
  visit(url: string): Cypress.Chainable<Cypress.AUTWindow> {
    return cy.visit(url);
  }
}
