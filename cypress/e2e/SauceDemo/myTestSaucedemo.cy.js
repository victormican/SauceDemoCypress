describe('Saucedemo - Test de Compra', () => {
  it('Debería permitir la compra con el usuario standard_user', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    // Agregar productos al carrito
    cy.get('.inventory_item').first().find('button').click();
    // Checkout
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    cy.get('#continue').click();
    cy.get('#finish').click();
    // Validar el checkout
    cy.contains('Thank you for your order!').should('be.visible');
    // Logout
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
  });

  it('Debería permitir la compra con el usuario problem_user', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('problem_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    // Agregar productos al carrito
    cy.get('.inventory_item').first().find('button').click();
    // Checkout
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    cy.get('#continue').click();
    cy.get('#finish').click();
    // Validar el checkout
    cy.contains('Thank you for your order!').should('be.visible');
    // Logout
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
  });
});
