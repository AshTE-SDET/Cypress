export class gitusersite {
    
    git_Search = '[data-testid="search-bar"]'
    
    git_button = 'button'

    git_user=':nth-child(17) > div > a'

    ///profile_name= '.p-name.vcard-fullname.d-block.overflow-hidden'
    
    searchfield(){
        cy.get(this.git_Search).type('ASH')
    }
    
    searchbutton(){
        cy.get(this.git_button).click()
    }
    userurl(){
        cy.get(this.git_user).click()
    }

    pageverify(){
        cy.title().should('eq', 'Chris Lidyard')
    }
}
