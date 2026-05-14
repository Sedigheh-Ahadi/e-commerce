export class ProductInfoPage {

    clickOnBuy() {
        return cy.contains('button', 'Buy now').click();

    }

    waitForProductInfoPage() {

        cy.url().should('contain', 'route=product/product&product_id=');
        cy.document({ timeout: 10000 }).its('readyState').should('eq', 'complete');

    }
}