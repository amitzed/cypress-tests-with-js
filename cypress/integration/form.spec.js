

describe('Form Testing Suite', () => {

  it('Form can be filled', () => {
    cy.visit('/');
    cy.get('form');

    cy.get('#name').type('Amit');
    cy.get('#email').type('amit@gmail.com');
    cy.get('#message').type('Testing this using Cypress');

    cy.get('button').should('contain', 'SEND');
  });

});
