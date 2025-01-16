export class emergencycontacts{
    emergency_lnk = ':nth-child(3) > .orangehrm-tabs-item'
    assigned_contact= ':nth-child(1) > .orangehrm-action-header > .oxd-button'
    saveemergency_details = '.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6'
    name_field= ':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    rltn_field = ':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    home_phone = ':nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    mobile_phone =':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    work_phone =  ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    save_details= '.oxd-button--secondary'
    sucess_msg='.oxd-toast'
    delete_btn = ':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon'

 emergencycontactslink(){
    cy.get(this.emergency_lnk).click().wait(200);

 }
assigncontactblock(){
      cy.get(this.assigned_contact).click().wait(200);
}

saveemergencyblock(){
      cy.get(this.saveemergency_details).should('have.text','Save Emergency Contact').wait(200);
}

namefield(){
      cy.get(this.name_field).clear().type('Aishwarya Sharma');
}

rltn(){
      cy.get(this.rltn_field).clear().type('Friend');
}

homenumber()
{
   cy.get(this.home_phone).clear().type('1234567890');
}

mobilenumber(){
      cy.get(this.mobile_phone).clear().type('1234567890');
}
 worknumber(){
   cy.get(this.work_phone).clear().type('1234567890');
 }
savebtn(){
   cy.get(this.save_details).click().wait(200);
}
sucessmsgvalidation(){
   cy.get(this.sucess_msg).should('contain.text', 'SuccessSuccessfully Saved').wait(20000);
}
deletedata(){
   cy.get(this.delete_btn).click().wait(200);
   cy.on('window:confirm', (text) => {
      expect(text).to.equal('Are you sure you want to delete?');  // yields true');
      return true;

   });
}
deletebox(){
   cy.get('.oxd-button--label-danger').click();
   cy.get('.oxd-toast').should('contain.text', 'SuccessSuccessfully Deleted');

}







}

