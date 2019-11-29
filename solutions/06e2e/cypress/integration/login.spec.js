before(function() {
  cy.clearLocalStorage();
});

describe('Login Test', function() {
  it('Visits my local host and logs in', function() {
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
      .should('contain', 'user.name@domain.com');
  });
});