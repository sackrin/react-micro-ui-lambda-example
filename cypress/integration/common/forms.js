import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/I see the "([^"]*)" form/, formName => {
  cy.get('#storybook-preview-wrapper iframe')
    .iframeEl(`*[data-register-form="${formName}"]`)
    .should('to.exist');
});

Then(/I see I can choose to continue/, () => {
  cy.get('#storybook-preview-wrapper iframe')
    .iframeEl(`.test-registerButtonContinue`)
    .should('to.exist');
});

Then(/I choose to continue/, () => {
  cy.wait(500);
  cy.get('#storybook-preview-wrapper iframe')
    .iframeEl(`.test-registerButtonContinue`)
    .click({ force: true });
});

Then(/I see I can choose to submit/, () => {
  cy.get('#storybook-preview-wrapper iframe')
    .iframeEl(`.test-registerButtonSubmit`)
    .should('to.exist');
});

Then(/I choose to submit/, () => {
  cy.wait(500);
  cy.get('#storybook-preview-wrapper iframe')
    .iframeEl(`.test-registerButtonSubmit`)
    .click({ force: true });
});
