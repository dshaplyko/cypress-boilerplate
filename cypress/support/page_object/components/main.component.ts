interface Component {
  readonly rootEl: string;
}

export default class MainComponent implements Component {
  readonly rootEl: string;

  constructor(rootEl: string) {
    this.rootEl = rootEl;
  }

  get root(): Cypress.Chainable<JQuery> {
    return cy.get(this.rootEl);
  }
}
