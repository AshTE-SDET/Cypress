import { loginPageCypress } from "../../CPOM/PageElement/CLogin.spec.cy"
import { myinfo } from "../../CPOM/PageElement/myinfopage.cy"
const myinfoElements = new myinfo();
const loginElements = new loginPageCypress();
describe('Login Functionality', function() {
    beforeEach(() => { //Open the login page before each test
        loginElements.visit();
        loginElements.login();
        myinfoElements.infolink();
    });
    it('Valid Login', function() {
        cy.url().should('not.include', '/auth/login')//Validate the URL
    });
    it('Personal Detail Form fill in myinfo page', function() {
        
        myinfoElements.firstname();
        myinfoElements.middlename();
        myinfoElements.lastname();
        //myinfoElements.nickname();
        myinfoElements.employeeid();
        myinfoElements.otherid();
        myinfoElements.driverlicense();
        myinfoElements.expfld();
        myinfoElements.expirydate();
        myinfoElements.dobfield();
        myinfoElements.dobdate();
        myinfoElements.usergender();
        
    });

})