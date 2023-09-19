const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  trashAssetsBeforeRuns: false,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});