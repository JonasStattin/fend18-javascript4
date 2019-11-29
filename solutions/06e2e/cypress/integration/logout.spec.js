before(function() {
  cy.clearLocalStorage();
});

describe('Logout Test', function() {
  it('Visits my local host and logs in, and then logs out', function() {
    cy.visit('/');

    cy.get('input[name="email"]')
      .type('user.name@domain.com')
      .should('have.value', 'user.name@domain.com');

    cy.get('input[name="password"]')
      .type('MyPass99')
      .should('have.value', 'MyPass99');

    cy.get('input[type="submit"]')
      .click();

    cy.get('.user')
      .click();
    
    cy.get('form > p')
      .should('contain', 'Please login')
  });
});