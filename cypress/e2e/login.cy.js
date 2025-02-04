import LoginPage from '..LoginPage';

describe('Login Test', () => {
  it('Logs in successfully', () => {
    LoginPage.visit();
    LoginPage.enterUsername('user1');
    LoginPage.enterPassword('password123');
    LoginPage.clickLogin();
    
    cy.url().should('include', '/dashboard'); // Verify login success
  });
});
