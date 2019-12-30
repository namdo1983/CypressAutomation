/// <reference types="Cypress" />

describe('My First Test', () => {

        beforeEach(() => {
            cy.visit('https://tiki.vn/', {timeout: 30000 })
            cy.title().should('include', 'Tiki')

        })
    
    it('Make a search product ', () => {

        cy.get('span.cotJxS')
        .should('be.visible').click({force: true})

        cy.get('div.bHypCd > span.gflNjp')
        .should('be.visible').click()

        cy.get('p.message').contains('Không có sản phẩm nào trong giỏ hàng của bạn.').should('be.visible')

        cy.get('[name="q"]').clear().type('Dell gaming')
        cy.get('div.search-wrap > button > span').should('be.visible').click()
        cy.get('ul.sort-list > li:nth-of-type(1) > a').contains('HÀNG MỚI').should('be.visible').click()
        //select new product with high price
        cy.get('#ants-product-list > div:nth-of-type(1) > a.search-a-product-item > div.content > span.image > img.product-image.img-responsive')
            .should('be.visible').click()

        cy.get('#qty').clear().type('2')
        cy.get('.cta-box').contains('CHỌN MUA').should('be.visible').click({force: true})
        //check add to cart after checked
        cy.get('div.add-to-cart-success > button.btn').should('be.visible').click()

        //Remove from cart
        cy.get('a.btn.btn-link.btn-item-delete').should('be.visible').click()
        cy.get('.col-xs-12').contains('Giỏ hàng ').should('be.visible')
        cy.get('div.container > div:nth-of-type(3) > div > h5 > span').contains('(0 sản phẩm)').should('be.visible')


    })

})