import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given(/I choose to view storybook/, () => {
  cy.visit(`/?path=/story/`);
});

Then(/I see storybook/, () => {
  cy.get(`#root`).should('to.exist');
});
