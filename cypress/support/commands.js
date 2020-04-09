// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('iframeEl', { prevSubject: 'element' }, ($iframe, selector) => {
  let count = 0;
  Cypress.log({
    name: 'iframe',
    consoleProps() {
      return {
        iframe: $iframe,
      };
    },
  });
  const recursiveChecker = (resolve) => () => {
    const iframeChild = $iframe.contents().find(selector);
    if (iframeChild.length > 0) {
      resolve($iframe.contents().find(selector));
    } else if (count === 10) {
      resolve(undefined);
    } else {
      count = count + 1;
      setTimeout(recursiveChecker(resolve), 500);
    }
  };
  return new Cypress.Promise(resolve => {
    recursiveChecker(resolve)();
  });
});
