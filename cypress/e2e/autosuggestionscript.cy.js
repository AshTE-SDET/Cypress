/// <reference types="Cypress"/>


describe ('hubspot login',()=>{
    it ('Login test', ()=>{

        cy.visit('https://app.hubspot.com/login/legacy', {failOnStatusCode: false}) //when the website fails to load then failonstatus
        cy.get('#username').type('aishwarya@gmail.com')
        cy.get('#password').type('aishwarya@123')
        cy.get('#loginBtn').click()
        
    })
  
}) 