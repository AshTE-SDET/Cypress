// Desc: My info page elements
import { FourDigitNumber } from "../PageActions/number.cy"; // Import the function from the number.cy file
const randomValue = FourDigitNumber(); // Call the function to get a random value
import { NineDigitNumber } from "../PageActions/number.cy"; // Import the function from the number.cy file
const randomValue1 = NineDigitNumber(); // Call the function to get a random value
import { CurrentDate } from "../PageActions/number.cy";
const currentDate = CurrentDate();
import  "cypress-file-upload";


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
    attachment_icon='button.oxd-button--text'
    //upload_file = '.oxd-file-button'
    fileupload_save='.orangehrm-attachment > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary'

    contact_link=':nth-child(2) > .orangehrm-tabs-item'
    street_1=':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    country='.oxd-select-text'
    telephone_block=':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    save_on_cd='button[type="submit"]'

    infolink(){

        cy.get(this.myinfolink).click().wait(200);
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
        cy.get(this.d_obfield).click({force:true}).clear();
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
documentupload(){
    cy.get(this.attachment_icon).click().wait(2000);
}
browserbtnclick(){
    const filepath= 'wpx.png';
    cy.get('.oxd-file-input-div').click().wait(2000);
    cy.get('.oxd-file-input-div').attachFile(filepath);
    cy.get('.oxd-file-button')
    .should('have.property', 'wpx.png')
    .and('contain', 'wpx.png');
    //cy.get('.oxd-file-input-div').should('contain', 'wpx.png');
    //cy.get('.oxd-file-input-div').wait(2000);

}
filesavebtn(){
    cy.get(this.fileupload_save).click();
}
 

contactdetailslink() {
    cy.get(this.contact_link).click({force:true});
}
address1(){
    cy.get(this.street_1).type('A-1, Sector 62, Noida').scrollIntoView();
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Noida').scrollIntoView();
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Delhi').scrollIntoView();
    cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('201301');
}
   countryincd(){
    cy.get(this.country).click().scrollIntoView();
    cy.get('.oxd-select-option').contains('Albania').click({force:true});
    cy.get(this.country).should('have.text', 'Albania'); // Assertion to verify the selected option
   }
    
   telephonedd(){
    cy.get(this.telephone_block).type('0123456789');
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('1234567890');
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('1234567890');
   }

   mail(){
    cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('anymail@gmail.com');
    cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('workmail@gmail.cm');
   }
   savecontactdetails(){
    cy.get(this.save_on_cd).click();
   }




























}
