before(function() {
  cy.clearLocalStorage();
});

describe('Post Test', function() {
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
  });

  it('Makes a post', function() {
    cy.get('input[name="post"]')
      .type('Writing a new post')
      .should('have.value', 'Writing a new post');

    cy.get('input[type="submit"]')
      .click();

    cy.get('ul.container > li > p')
      .should('contain', 'Writing a new post')
  });

  it('Deletes a post', function() {
    cy.get('ul li button')
      .click();

    cy.get('ul.container')
      .children()
      .should('have.length', 0)
  });
});