
export class HomePage
{
    visitHomePage()
    {
         cy.visit( Cypress.config('baseUrl'));
         cy.document({ timeout: 10000 }).its('readyState').should('eq', 'complete');
       
    }

}