/// <reference types="cypress"/>

const { gitusersite} =require ("../../CPOM/./PageElement/gitsiteuser.cy")

const Gitpage = new gitusersite
describe ('GitHub User Website',()=>{
    it ('Verifying the usergit hub profile', ()=>{

        cy.visit('https://gh-users-search.netlify.app/', {failOnStatusCode: false}) //when the website fails to load then failonstatus
        /*cy.get('[data-testid="search-bar"]').type('ASH')
        cy.get('button').click()
        cy.get('header > a').click()
        cy.wait(200)*/
       Gitpage.searchfield()
       Gitpage.searchbutton()
        Gitpage.userurl()
        ///Gitpage.pageverify()

    })
  
}) 