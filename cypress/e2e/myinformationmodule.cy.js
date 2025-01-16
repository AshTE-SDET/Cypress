import { loginPageCypress } from "../../CPOM/PageElement/CLogin.spec.cy"
import { myinfo } from "../../CPOM/PageElement/myinfopage.cy"
import {emergencycontacts} from "../../CPOM/PageElement/emergencycontacts.cy"
const myinfoElements = new myinfo();
const loginElements = new loginPageCypress();
const emergencycontactElements = new emergencycontacts();
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
        myinfoElements.drop();
        myinfoElements.savebtn();
        myinfoElements.sucessmsgvalidation();
        myinfoElements.documentupload();
        myinfoElements.browserbtnclick();
        myinfoElements.filesavebtn();

    });

it("Contact Details", function(){

    myinfoElements.contactdetailslink();
    myinfoElements.address1();
    myinfoElements.countryincd();
    myinfoElements.telephonedd();
    myinfoElements.mail();  
    myinfoElements.savecontactdetails();
    myinfoElements.sucessmsgvalidation();

});
it.only("Emergency Contacts", function(){
    emergencycontactElements.emergencycontactslink();
    emergencycontactElements.assigncontactblock();
    emergencycontactElements.saveemergencyblock();
    emergencycontactElements.namefield();
    emergencycontactElements.rltn();
    emergencycontactElements.homenumber();
    emergencycontactElements.mobilenumber();
    emergencycontactElements.worknumber();
    emergencycontactElements.savebtn();
    emergencycontactElements.sucessmsgvalidation();
    emergencycontactElements.deletedata();  
    emergencycontactElements.deletebox();
});
});