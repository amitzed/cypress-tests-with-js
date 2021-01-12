

describe('Form Testing Suite', () => {

  it('Form can be filled', () => {
    cy.visit('/');
    cy.get('form');
  });

});
