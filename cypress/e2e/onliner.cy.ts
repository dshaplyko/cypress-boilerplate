import App from '../support/page_object/pages';

const app = new App();

describe('Test Suite', () => {
  it('First test', () => {
    app.mainPage.visit();
    app.mainPage.loginButton.click();
    app.mainPage.authContainer.root.should('be.visible');
    app.mainPage.authContainer.enterButton.should('be.visible').and('contain.text', 'Войти1');
  });
});
