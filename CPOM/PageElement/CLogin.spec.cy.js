export class loginPageCypress{


    username_text=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_text= ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button='.oxd-button'
username(){
    cy.get(this).type('Admin')
}
password(){
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
}
loginbtn(){
    cy.get('.oxd-button').click()
}
}