/// <reference types="Cypress" />

describe('My First Test', () => {

    beforeEach(() => {
        cy.visit('https://tiki.vn/', {timeout: 90000 })
        cy.title().should('include', 'Tiki')

    })
    
    it('Check Login with Email at Home Page', () => {

        cy.get('div.toggler.kgAKwJ > button:first-child').focus()
        cy.get('div.toggler.kgAKwJ > button:first-child').contains('Đăng nhập').click({force: true})

        cy.get('#email').should('be.visible')
            .clear().type('namdd_aptech@yahoo.com')

        cy.get('#password').should('be.visible')
            .clear().type('bobo2407')
        cy.get('.jpHvvv').should('be.visible').click()
        
        cy.get('div.toggler.kgAKwJ > button:first-child').focus()
        cy.get('div.toggler.kgAKwJ > button:first-child').contains('Đăng nhập').click({force: true})

        
    })

    it.only('Check Banner Event at Home Page', () => {

        cy.get('.slick-active > :nth-child(1) > a > .loaded > .image').should('be.visible').click()
        cy.get('div.sc-cSHVUG.bdglRD').should('be.visible').click()
        cy.get('div.sc-gqjmRU.cAZUkY > div:nth-of-type(17) > div.inner > a > div:first-child').should('be.visible').click()

        //click each items from list thumb img
        cy.get('.active > .flx > img').should('be.visible').click()
        cy.get('.vertical > :nth-child(2) > .flx > img').should('be.visible').click()
        cy.get('.vertical > :nth-child(3) > .flx > img').should('be.visible').click()
        cy.get('.vertical > :nth-child(4) > .flx > img').should('be.visible').click()
        cy.get('.vertical > .thumb-item.text > .flx > .text').should('be.visible').click()
        cy.get('[aria-label="Go to Slide 2"]').should('be.visible').click()
        cy.get('[aria-label="Go to Slide 3"]').should('be.visible').click()
        cy.get('[aria-label="Go to Slide 4"]').should('be.visible').click()
        cy.get('[aria-label="Go to Slide 5"]').should('be.visible').click()
        cy.get('[aria-label="Go to Slide 6"]').should('be.visible').click()
        cy.get('.product-image-gallery > .close').should('be.visible').click()
        cy.get('[data-value="Màu"] > .color-items > :nth-child(2) > .js-filter').should('be.visible').click()
        cy.get(':nth-child(4) > .js-filter').should('be.visible').click()
        cy.get(':nth-child(3) > .js-filter').should('be.visible').click()
        cy.get('#mainAddToCart').should('be.visible').click()
        cy.get('.add-to-cart-success > .btn').should('be.visible').click()
        cy.get('.btn-item-delete').should('be.visible').click()
        cy.get('.logo > .tikicon').should('be.visible').click()
        
    })

})