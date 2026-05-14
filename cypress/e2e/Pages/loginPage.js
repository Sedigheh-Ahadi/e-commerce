export class LoginPage {

    LOGINPAGE_EMAIL_INPUT = 'input[name="email"]';
    LOGINPAGE_PASSWORD_INPUT = 'input[name="password"]';
    LOGINPGE_LOGIN_SUBMIT = 'input[value="Login"]';




    enterEmail(email) {
        return cy.get(this.LOGINPAGE_EMAIL_INPUT).type(email);
    }
    enterPassword(password) {
        return cy.get(this.LOGINPAGE_PASSWORD_INPUT).type(password);

    }
    login(email, password) {
        this.enterEmail(email);
        this.enterPassword(password);
        return this;
    }
    waitForLoginPage() {
        cy.url().should('contain', 'index.php?route=account/login');
        cy.document({ timeout: 10000 }).its('readyState').should('eq', 'complete');

    }
}