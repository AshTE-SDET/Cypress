export class loginPageCypress{

    
    username_text=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_text= ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button='.oxd-button'

visit(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
}
username(){
    cy.get(this.username_text).type('Admin')
}
password(){
    cy.get(this.password_text).type('admin123')
}
loginbtn(){
    cy.get(this.login_button).click()
}
login() {
    const username = 'Admin';
    const password = 'admin123';
    this.username(username);
    this.password(password);
    this.loginbtn();
}
}