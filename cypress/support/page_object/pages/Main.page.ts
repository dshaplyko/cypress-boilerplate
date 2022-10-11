import AuthContainer from '../components/main_page/auth.component';
import BasePage from './Base.page';

export default class MainPage extends BasePage {
  get loginButton() {
    return cy.get('div.auth-bar__item--text');
  }

  get authContainer() {
    return new AuthContainer('#auth-container');
  }

  override visit(url = '/') {
    return super.visit(url);
  }
}
