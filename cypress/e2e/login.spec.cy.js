///<reference types="cypress"/>

const { loginPageCypress } = require("../../CPOM/PageElement/CLogin.spec.cy")

const Login_Elements = new loginPageCypress
describe('POM', function(){
    beforeEach(() => {
        Login_Elements.visit(); // Open the login page before each test
      });

   it('Log In', function(){ 

        Login_Elements.username()
        Login_Elements.password()
        Login_Elements.loginbtn()
        cy.wait(60000)

   });
   it('Search Functionality', function () {
    Login_Elements.username();
    Login_Elements.password();
    Login_Elements.loginbtn();

    cy.get('.oxd-main-menu-search', { timeout: 60000 })
      .should('be.visible')
      .click()
      .type('My Info')
});

})