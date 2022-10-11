import MainComponent from '../main.component';

export default class AuthContainer extends MainComponent {
  get enterButton(): Cypress.Chainable {
    return this.root.get('button.auth-button_primary');
  }
}
