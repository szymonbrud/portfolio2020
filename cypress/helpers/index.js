export const testingResolution = testSettings => {
  Object.keys(testSettings).forEach(device => {
    describe(device, () => {
      beforeEach(() => {
        cy.viewport(...testSettings[device].resolution);
        cy.visit('http://localhost:8000');
        cy.wait(5000);
      });

      testSettings[device].elementsVisible.forEach(element => {
        it(`Testing ${element.dataTestIdName} to be ${
          element.shouldBeVisible ? 'visible' : 'hidden'
        }`, () => {
          cy.get(`[data-testid=${element.dataTestIdName}]`).should(
            `${element.shouldBeVisible ? 'be.visible' : 'be.not.visible'}`,
          );
        });
      });
    });
  });
};
