describe('Testing of ViewPort',()=>{
    before(()=>{
        console.log('Running the Viewport Scripts')
    })
    beforeEach(()=>{
        cy.visit('http://www.google.com')
    })


it('open in samsungs10',()=>{
    cy.viewport('samsung-s10')
    cy.screenshot()
    cy.wait(200)
})

it('open in mcbook-16',()=>{
    cy.viewport('macbook-16')
    cy.screenshot()
    cy.wait(200)
})

it('open in Viewport 1024 and 768',()=>{
    cy.viewport(1024, 768)
    cy.screenshot()
    cy.wait(200)
})

})
