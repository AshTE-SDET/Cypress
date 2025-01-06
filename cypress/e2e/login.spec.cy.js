/// <reference types="Cypress"/>

const { loginPageCypress } = require("../../CPOM/PageElement/CLogin.spec.cy")

const Login_Elements = new loginPageCypress
describe('POM', function(){
   it('Log In', function(){ 

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        /*cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()*/
        Login_Elements.username()
        Login_Elements.password()
        Login_Elements.loginbtn()

    })

   
})