import { testingResolution } from '../../helpers';

describe('Testing HeroPage', () => {
  describe('Testing navigation', () => {
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

  describe('Testing elements visibility on different resolutions', () => {
    const testSettings = {
      phone: {
        resolution: [375, 812],
        elementsVisible: [
          {
            dataTestIdName: 'burgerMenu',
            shouldBeVisible: true,
          },
          {
            dataTestIdName: 'menuDesktopButton',
            shouldBeVisible: false,
          },
          {
            dataTestIdName: 'heroImage',
            shouldBeVisible: false,
          },
        ],
      },
      tablet: {
        resolution: [768, 1024],
        elementsVisible: [
          {
            dataTestIdName: 'burgerMenu',
            shouldBeVisible: true,
          },
          {
            dataTestIdName: 'menuDesktopButton',
            shouldBeVisible: false,
          },
          {
            dataTestIdName: 'heroImage',
            shouldBeVisible: true,
          },
        ],
      },
      smallDesktop: {
        resolution: [1440, 900],
        elementsVisible: [
          {
            dataTestIdName: 'burgerMenu',
            shouldBeVisible: false,
          },
          {
            dataTestIdName: 'menuDesktopButton',
            shouldBeVisible: true,
          },
          {
            dataTestIdName: 'heroImage',
            shouldBeVisible: true,
          },
        ],
      },
      desktop: {
        resolution: [1920, 1080],
        elementsVisible: [
          {
            dataTestIdName: 'burgerMenu',
            shouldBeVisible: false,
          },
          {
            dataTestIdName: 'menuDesktopButton',
            shouldBeVisible: true,
          },
          {
            dataTestIdName: 'heroImage',
            shouldBeVisible: true,
          },
        ],
      },
    };

    testingResolution(testSettings);
  });
});
