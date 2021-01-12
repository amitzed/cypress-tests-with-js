

describe('Form Testing Suite', () => {

  it('Form can be filled', () => {
    cy.visit('/');
    cy.get('form');

    cy.get(':nth-child(1) > label').should('contain', 'Name');

    cy.get('#name').type('Amit');
    cy.get('#email').type('amit@gmail.com');
    cy.get('#message').type('Testing this using Cypress');

    cy.get('button').should('contain', 'SEND');

    cy.get('form').submit();

    cy.get('#second-page-link').click().url().should('contain', '/secondPage');
  });

});
