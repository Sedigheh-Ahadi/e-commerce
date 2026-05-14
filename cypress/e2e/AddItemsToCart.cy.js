import { HomePage } from "./Pages/homePage";
import { SearchBar } from "./Pages/searchBar";
import { FilterSidebar } from "./Pages/filterSidebar";
import { LoginPage } from "./Pages/loginPage";
import { ProductsGrid } from "./Pages/productsGrid";
import { ProductInfoPage } from "./Pages/productInfoPage";
import { CheckoutPage } from "./Pages/checkoutPage";

let filterSidebar = new FilterSidebar();
let homePage = new HomePage();
let searchBar = new SearchBar();
let loginPage = new LoginPage();
let productsGrid = new ProductsGrid();
let productInfoPage = new ProductInfoPage();
let checkoutPage = new CheckoutPage();

describe('Purchase products', function () {
    beforeEach(function () {


        cy.fixture('testData.json').as('data');

    })

    it('user', function () {

        homePage.visitHomePage();

        searchBar.clickOnAccount();

        loginPage.waitForLoginPage();
        loginPage.login(this.data.UserCredentials.email, this.data.UserCredentials.password);

        searchBar.searchProductWithCategory(this.data.productInfo[0].category, this.data.productInfo[0].name);


        filterSidebar.checkInStockCheckbox();

        filterSidebar.waitForDataToLoad();

        productsGrid.clickOnFirstProduct(this.data.productInfo[0].name);
        productInfoPage.waitForProductInfoPage();
        productInfoPage.clickOnBuy();

        checkoutPage.waitForCheckoutPage();

        checkoutPage.changeQuantity(this.data.productInfo[0].Quantity);

        //second item

        searchBar.searchProductWithCategory(this.data.productInfo[1].category, this.data.productInfo[1].name);


        filterSidebar.checkInStockCheckbox();

        filterSidebar.waitForDataToLoad();

        productsGrid.clickOnFirstProduct(this.data.productInfo[1].name);
        productInfoPage.waitForProductInfoPage();
        productInfoPage.clickOnBuy();

        checkoutPage.waitForCheckoutPage();

        ///third item

        searchBar.searchProductWithCategory(this.data.productInfo[2].category, this.data.productInfo[2].name);


        filterSidebar.checkInStockCheckbox();

        filterSidebar.waitForDataToLoad();

        productsGrid.clickOnFirstProduct(this.data.productInfo[2].name);
        productInfoPage.waitForProductInfoPage();
        productInfoPage.clickOnBuy();

        checkoutPage.waitForCheckoutPage();
        checkoutPage.verifyOrderDetail(this.data.productInfo);






    })






})