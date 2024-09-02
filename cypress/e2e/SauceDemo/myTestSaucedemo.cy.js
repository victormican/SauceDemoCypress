describe('Saucedemo - Test de Compra', () => {
  const realizarCompra = (usuario, contraseña) => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type(usuario);
    cy.get('#password').type(contraseña);
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
    // Esperar para asegurar el cierre correcto
    cy.wait(1000); // Espera de 1 segundo
  };

  it('Debería permitir la compra con el usuario standard_user', () => {
    realizarCompra('standard_user', 'secret_sauce');
  });

  it('Debería permitir la compra con el usuario problem_user', () => {
    realizarCompra('problem_user', 'secret_sauce');
  });
});
