// Desc: My info page elements
import { FourDigitNumber } from "../PageActions/number.cy"; // Import the function from the number.cy file
const randomValue = FourDigitNumber(); // Call the function to get a random value
import { NineDigitNumber } from "../PageActions/number.cy"; // Import the function from the number.cy file
const randomValue1 = NineDigitNumber(); // Call the function to get a random value
import { CurrentDate } from "../PageActions/number.cy";
const currentDate = CurrentDate();

export class myinfo{

    myinfolink= 'a[href="/web/index.php/pim/viewMyDetails"]'
    first_name='input[name="firstName"]'
    middle_name='input[name="middleName"]'
    last_name=':nth-child(3) > :nth-child(2) > .oxd-input'
    //nick_name=':nth-child(1) > .oxd-form > :nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'
    emp_id=':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    other_id=':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    driver_license=':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    exp_date=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon'
    expdate_field=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'
    d_obicon=':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon'
    d_obfield=':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'
    
    gender=':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input'
    dd=':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    form_save=':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button'
    sucess_msg='.oxd-toast'
    
    infolink(){

        cy.get(this.myinfolink).click()
    }
    firstname(){
        cy.get(this.first_name).clear().type('Aishwarya')
    }
    middlename(){
        cy.get(this.middle_name).clear()
    } 
    lastname(){
        cy.get(this.last_name).clear().type('Sharma')
    }
    //nickname(){
      //  cy.get(this.nick_name).clear().type('Ash')
    //}
    employeeid(){
        cy.log(`Generated Random Number for Other ID: ${randomValue}`);
        cy.get(this.emp_id).clear().type(randomValue.toString());
    }   
    otherid(){
        cy.log(`Generated Random Number for Other ID: ${randomValue}`);
        cy.get(this.other_id).clear().type(randomValue.toString());
    }
    driverlicense(){
        cy.log(`Generated Random Number for Other ID: ${randomValue}`);
        cy.get(this.driver_license).clear().type(randomValue1.toString());
    }
    expfld(){   
        cy.get(this.expdate_field).then(($input) => {
            $input[0].value='';
            cy.get(this.expdate_field).click().clear();
        }
    )
    }
    expirydate(){
    cy.get(this.exp_date).click().type(currentDate);
    cy.get('.orangehrm-edit-employee-content > :nth-child(1)').click();
}
dobfield(){   
    cy.get(this.d_obfield).then(($input) => {
        $input[0].value='';
        cy.get(this.d_obfield).click().clear();
    }
)
}

dobdate(){
    cy.get(this.d_obicon).click({force:true}).type(currentDate);
    cy.get('.oxd-layout-context').wait(200).click({force:true});
}
usergender(){
    cy.get(this.gender).click();
    //cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();
}
drop(){
    cy.get(this.dd).click();
    cy.get('.oxd-select-option').contains('Iranian').click();
    cy.get(this.dd).should('have.text', 'Iranian'); // Assertion to verify the selected option
}
savebtn(){
    cy.get(this.form_save).click();
}
sucessmsgvalidation(){
    cy.get(this.sucess_msg).should('contain.text', 'SuccessSuccessfully Updated').wait(2000);
}
}
