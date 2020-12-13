/// <reference types="cypress" />

context('Compra', () => {
    it('Efetuar uma compra de produto', () => {
        // Background login
        cy.backgroundLogin();

        // http://automationpractice.com/index.php
        cy.visit('/');

        // Adiciona produto ao carrinho
        let nomeProduto = 'Faded Short Sleeve T-shirts';
        cy.contains(nomeProduto).trigger('mouseover');
        cy.contains(nomeProduto)
            .parent() // h5
            .siblings('div.button-container')
            .children('a')
            .first() // add to cart
            .click()

        // Validando se o produto foi adicionado ao carrinho com sucesso
        cy.get('.icon-ok')
            .parent() //h2
            .should('contain.text', 'Product successfully added to your shopping cart');
        cy.get('span#layer_cart_product_title').should('contain.text', nomeProduto);

        // Segue para o checkout
        cy.get(".button-container a[href$='controller=order']").click();

        // Summary
        cy.get(".cart_navigation a[href$='order&step=1']").click();

        // Sign in
        // cy.get('#email').type('keoma@mail.com');
        // cy.get('#passwd').type('pwd123');
        // cy.get('button#SubmitLogin').click();

        // Validando se o endereço de entrega é igual o de cobrança
        cy.get('[type=checkbox]#addressesAreEquals')
            .should('have.attr', 'checked', 'checked');

        // Address
        cy.get('button[name=processAddress]').click();
        
        // Shipping
        cy.get('[type=checkbox]#cgv').check();
        cy.get('button[name=processCarrier]').click();

        // Payment
        cy.get('.bankwire').click();

        // Validando que a compra foi realizada com sucesso
        cy.get(".cart_navigation button[type='submit']")
            .find('span')
            .contains('I confirm my order')
            .click();

        // Validando a compra na tela de pedidos
        cy.get('.cheque-indent strong')
            .should('contain.text', 'Your order on My Store is complete.');
        cy.get('div.box').invoke('text').then((text) => {
            cy.writeFile('cypress/fixtures/pedido.json', { id: `${ text.match(/[A-Z]{9}/g) }` })
        })
        cy.get(".cart_navigation a[href$='history']").click();
        cy.readFile('cypress/fixtures/pedido.json').then((pedido) => {
            cy.get('tr.first_item td.history_link a').should('contain.text', pedido.id);
        })
    });
});