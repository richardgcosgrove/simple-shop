describe('shop', () => {
  // check that store is identified correctly
  it('should have title', () => {
    cy.visit('/');
    cy.title().should('eq', 'Cypress Store');
  });

  describe('item', () => {
    it('should have necessary items', ()=> {
      cy.get('[data-cy=image]').should('exist');
      cy.get('[data-cy=title]').as('tittle').should('exist');
      cy.get('[data-cy=price]').as('price').should('exist');
      cy.get('[data-cy=description]').should('exist');
      cy.get('[data-cy=drop]').should('exist');
    });
  });

  describe('cart', () => {
    beforeEach(() => {
      cy.get('[data-cy=cart-list]').as('cart');
    })

    it('should be able to add and remove from the cart', () => {
      // we want to make sure the cart is initially empty
      cy.get('@cart').then($cart => {
        expect($cart.children().length).to.eq(0);
      });
      cy.get('[data-cy=total]').should('contain', '$0');
      cy.get('[data-cy=cart-item-title]').should('not.exist');
      cy.get('[data-cy=cart-item-price]').should('not.exist');
      cy.get('[data-cy=remove-from-cart]').should('not.exist');
      
      // add item to cart
      cy.get('[data-cy=add-to-cart]').first().click();
      cy.get('@cart').then($cart => {
        expect($cart.children().length).to.eq(1);
      });
      cy.get('[data-cy=cart-item-title]').then($cartTitle => {
        cy.get('[data-cy=title]').first().then($title => {
          expect($title.text()).to.eq($cartTitle.text());
        })
      });
      cy.get('[data-cy=cart-item-price]').then($cartPrice => {
        cy.get('[data-cy=price]').first().then($price => {
          expect($price.text()).to.eq($cartPrice.text());
        });
        cy.get('[data-cy=total]').then($total => {
          expect($total.text()).to.eq($cartPrice.text());
        });
      });

      //remove item from cart
      cy.get('[data-cy=remove-from-cart]').first().click();
      cy.get('@cart').then($cart => {
        expect($cart.children().length).to.eq(0);
      });
      cy.get('[data-cy=total]').should('contain', '$0');
    });

    it('should handle multiple items', () => {
      cy.get('[data-cy=add-to-cart]').as('addButtons').then($addButtons => {        
          const buttonLength = $addButtons.length;
          // add all items on page
          cy.get('@addButtons').click({multiple: true});

          // make sure cart size is same as number of items added
          cy.get('@cart').then($cart => {
            expect($cart.children('').length).to.eq(buttonLength);
          });

          // make sure for click of delete item that 1 item is removed
          for (let i = 0; i < buttonLength; ++i) {
            cy.get('[data-cy=remove-from-cart]').first().click();
            cy.get('@cart').then($cart => {
              const length = $cart.children('').length;
              expect($cart.children('').length).to.eq(buttonLength - i - 1);
            });
          }
      });
    });

  });
});