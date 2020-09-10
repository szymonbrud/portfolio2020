describe('Testing HeroPage', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('http://localhost:8000');
    cy.wait(5000);
  });
  it('Join to HeroPage', () => {
    cy.contains('Szymon Brud');
  });

  it('Go to projects page by scroll down', () => {
    cy.contains('scroll down').click();
    cy.url().should('include', '/projects');
  });

  it('Go to projects by click arrow down', () => {
    cy.get('.1').click();
    cy.url().should('include', '/projects');
  });

  it('Go to contact by click arrow up', () => {
    cy.get('.0').click();
    cy.url().should('include', '/contact');
  });
});
