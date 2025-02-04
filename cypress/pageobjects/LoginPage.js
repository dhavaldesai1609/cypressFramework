class LoginPage {
    visit() {
      cy.visit('/login');
    }
  
    enterUsername(username) {
      cy.get('#username').type(username);
    }
  
    enterPassword(password) {
      cy.get('#password').type(password);
    }
  
    clickLogin() {
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default new LoginPage();
  