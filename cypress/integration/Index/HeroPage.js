describe('Testing HeroPage', () => {
  it('Join to HeroPage', () => {
    cy.visit('http://localhost:8000');
    cy.contains('Szymon Brud');
  });
});
