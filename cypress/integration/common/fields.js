import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/I provide "([^"]*)" for "([^"]*)" field/, (value, fieldName) => {
  cy.wait(250);
  cy.get('#storybook-preview-wrapper iframe')
    .iframeEl(`div[data-simple-field="${fieldName}"] input`)
    .type(value);
});

Then(/I provide "([^"]*)" for "([^"]*)" selection/, (value, fieldName) => {
  cy.wait(250);
  cy.get('#storybook-preview-wrapper iframe')
    .iframeEl(`div[data-simple-dropdown="${fieldName}"] div[role='button']`)
    .click({ force: true })
    .then(() =>
      cy
        .get('#storybook-preview-wrapper iframe')
        .iframeEl(`li[data-value="${value}"]`)
        .click(),
    );
});

Then(/I see I have entered "([^"]*)" for the "([^"]*)" field/, (value, fieldName) => {
  cy.get('#storybook-preview-wrapper iframe')
    .iframeEl(`div[data-simple-value="${fieldName}"] .test-simpleValueText`)
    .contains(value);
});
