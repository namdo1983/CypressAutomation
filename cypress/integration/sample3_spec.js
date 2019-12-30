/// <reference types="Cypress" />

describe('Tiki Project', () => {

    it('Check Banner at Home Page', () => {

        cy
        .visit('https://tiki.vn/', {timeout: 90000 })
        cy.title().should('include', 'Tiki')

        cy
        .get('#__next > div > main > div:nth-child(2) > div > div.Banners__MainGrid-sc-1e4vwbb-0.gRDgYd > div.Banners__MainGrid-sc-1e4vwbb-0.iWbZiF > div > div > div > div > div > div.slick-slide.slick-active.slick-current > div > a > div')
        .should('be.visible').click()
        cy.title().should('include', 'Áo dài')

        cy
        .get('[data-order="newest"] > a')
        .should('be.visible').click()

        cy.get('[data-seller-product-id="44183650"] > a > .content > .image > .product-image')
        .should('be.visible').click()

        cy.get('.add-to-cart')
            .should('be.visible').click()
    })
        
    it('Check Information products', () => {
               
        cy.get(':nth-child(1) > .last > a')
            .should('be.visible').contains('Fashion & Freedom')
        cy.get('tbody > :nth-child(2) > .last')
            .should('be.visible').contains('Nam')
        cy.get('tbody > :nth-child(3) > .last')
            .should('be.visible').contains('Nam')
        cy.get('tbody > :nth-child(4) > .last')
            .should('be.visible').contains('2733')
        cy.get('tbody > :nth-child(5) > .last')
            .should('be.visible').contains('F2')
        cy.get('tbody > :nth-child(6) > .last')
            .should('be.visible').contains('Gấm')
    })
    
})