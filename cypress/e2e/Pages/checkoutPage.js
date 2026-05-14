export class CheckoutPage {

    CHECKOUTPAGE_QUANTITY_INPUT = 'input[type=number]'
    CHECKOUTPAGE_REFRESHQUANTITY_ICON = 'i[class="fas fa-sync-alt"]'
    CHECKOUTPAGE_ORDERDETAIL_DATATABLE_HEADER = 'table thead th'
    CHECKOUTPAGE_ORDERDETAIL_DATATABLE_ROWS = 'div#checkout-cart table.table tbody tr'
    CHECKOUTPAGE_ORDERDETAIL_DATATABLE_Quantity = 'input[type=number]'
    CHECKOUTPAGE_ORDERDETAIL_DATATABLE_RERRESHBUTTON= 'button[class="btn btn-primary"]'
    CHECKOUTPAGE_ORDERDETAIL_DATATABLE_REMOVEBUTTON='button[class="btn btn-danger"]'

    enterQuantity(quantity) {

        return cy.get(this.CHECKOUTPAGE_QUANTITY_INPUT).eq(0).clear().type(quantity);

    }
    clickOnRefreshQuantity() {
        return cy.get(this.CHECKOUTPAGE_REFRESHQUANTITY_ICON).click();
    }
    waitForCheckoutPage() {

        cy.url().should('contain', 'index.php?route=checkout/checkout');
        cy.document({ timeout: 10000 }).its('readyState').should('eq', 'complete');


    }
    changeQuantity(quantity) {
        this.enterQuantity(quantity);
        this.clickOnRefreshQuantity();
        return this;
    }

    verifyOrderDetail(productTable) {
        const expectedHeaders = ['Image', 'Product Name', 'Quantity', 'Unit Price', 'Total'];
        const product = {};
        cy.get(this.CHECKOUTPAGE_ORDERDETAIL_DATATABLE_HEADER).each(($el, index) => {
            cy.wrap($el).should('have.text', expectedHeaders[index]);
        });

        cy.get(this.CHECKOUTPAGE_ORDERDETAIL_DATATABLE_ROWS).should('have.length', 3);

        cy.get(this.CHECKOUTPAGE_ORDERDETAIL_DATATABLE_HEADER).then(($headers) => {

            cy.log($headers)

            function getIndex(name) {
                return [...$headers].findIndex(
                    element => element.innerText.trim().toLowerCase() === name.toLowerCase()
                );
            }

            const imageCol = getIndex('Image')
            const nameCol = getIndex('Product Name')
            const qtyCol = getIndex('Quantity')
            const priceCol = getIndex('Unit Price')
            const totalCol = getIndex('Total')

            cy.log('priceCol', priceCol);
            cy.get(this.CHECKOUTPAGE_ORDERDETAIL_DATATABLE_ROWS).each(($row, index) => {

                const expected = productTable[index]

                cy.wrap($row).within(() => {

                    cy.get('td').eq(imageCol)
                        .find('img')
                        .should('exist')

                    cy.get('td').eq(nameCol).find('a')
                        .should('contain.text', expected.name)

                    cy.get('td').eq(qtyCol).find('div').find(this.CHECKOUTPAGE_ORDERDETAIL_DATATABLE_Quantity)
                        .should('have.value', expected.Quantity)

                    cy.get('td').eq(qtyCol).find('div').find('div').find(this.CHECKOUTPAGE_ORDERDETAIL_DATATABLE_RERRESHBUTTON)
                        .should('exist')
                    cy.get('td').eq(qtyCol).find('div').find('div').find(this.CHECKOUTPAGE_ORDERDETAIL_DATATABLE_REMOVEBUTTON)
                        .should('exist')

                    cy.get('td').eq(priceCol)
                        .should('contain.text', expected.price)

                })
            })

        })

    }
}