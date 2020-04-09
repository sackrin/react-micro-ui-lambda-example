import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given(/I choose to view storybook/, () => {
  cy.visit(`/?path=/story/`);
});

Given(/I choose to view story "([^"]*)"/, (path) => {
  cy.visit(`/?path=/story/${path}`);
});

Then(/I see storybook/, () => {
  cy.get(`#root`).should('to.exist');
});
