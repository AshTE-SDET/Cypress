const { defineConfig } = require("cypress");

module.exports = defineConfig({
e2e: {
  specPattern: 'cypress/e2e/login.spec.cy.js'
}

});
  module.exports = {
  e2e: {
    setupNodeEvents(on, config) { //implement node event listeners here
      
    },
  }
};
 
module.exports = {
  e2e: {
    experimentalInteractiveRunEvents: true, // Ensure interactive features are enabled
  },
};