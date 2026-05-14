export class ProductsGrid
{


    clickOnFirstProduct(productTitle)
    {

        return  cy.contains('a', productTitle).eq(0).click({force:true});
    }

}