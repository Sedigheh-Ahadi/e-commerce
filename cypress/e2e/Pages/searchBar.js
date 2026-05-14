export class SearchBar {
    SEARCHBAR_SEARCHTEXTBOX_INPUT = "input[type=text][name='search'][placeholder='Search For Products']"
    SEARCHBAR_CATEGORYDROPDOWN_BUTTON = "button[class='btn dropdown-toggle']"
    SEARCHBAR_SERACH_BUTTON = "button[type='submit'][class='type-text']"
    SERACHBAR_LAPTOPCATEGORY_ANCHOR = "a[class='dropdown-item'][data-category_id='18']"
    SERACHBAR_CATEGORYITEMS_ANCHOR = "a[class='dropdown-item']"
    enterTextInSearchBox(productInfo) {

      return  cy.get(this.SEARCHBAR_SEARCHTEXTBOX_INPUT).eq(0).type(productInfo);

    }
    clickOnSerachButton() {
       return cy.get(this.SEARCHBAR_SERACH_BUTTON).click();
    }
    selectCategory(categoryName) {
        cy.get(this.SEARCHBAR_CATEGORYDROPDOWN_BUTTON).eq(0).click();
       return cy.contains(this.SERACHBAR_CATEGORYITEMS_ANCHOR, categoryName).click()
    }

    searchProductWithCategory(category,name)
    {
        this.selectCategory(category);
        this.enterTextInSearchBox(name);
        this.clickOnSerachButton();
        return this;
    }
    clickOnAccount()
    {
     return    cy.contains('span', ' My account').click({ force: true });
    }


}