export class FilterSidebar {
    FILTERSIDEBAR_INSTOCK_CHECKBOX = "input[type='checkbox'][name='mz_fss'][id='mz-fss-0--1']";
    FILTERSIDEBAR_FILTERSECTION_ANCHOR = 'a[href="#mz-component-1789073441"]';
    FILTERSIDEBAR_AVAILABILITYSECTION_ANCHOR = 'div[class="mz-filter-group-header "]';
    FILTERSIDEBAR_CLOSE_TEXT = 'i[class="icon fas fa-times"]';
    
    clickOnFilterTitle() {
        return cy.get(this.FILTERSIDEBAR_FILTERSECTION_ANCHOR).eq(1).parent().click();
    }
    checkInstockCheckbox() {

        return cy.get(this.FILTERSIDEBAR_INSTOCK_CHECKBOX).should('be.visible').check();
    }
    openAvailabilitySection() {
        return cy.contains(this.FILTERSIDEBAR_AVAILABILITYSECTION_ANCHOR, ' Availability').click();

    }
    checkInStockOption()
    {
        return  cy.contains('label', 'In stock').prev().check({ force: true });
    }
    closeFilterSideBar()
    {
       return  cy.get( this.FILTERSIDEBAR_CLOSE_TEXT).eq(0).click();
    }
    checkInStockCheckbox()
    {

        this.clickOnFilterTitle();
        this.openAvailabilitySection();
        this.checkInStockOption();
        this.closeFilterSideBar();
        return this;
    }
    waitForDataToLoad()
    {
        cy.wait(2000);
    }
}