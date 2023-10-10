const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fef2rf',
  e2e: {
    baseUrl: "https://www.webdriveruniversity.com/",
    chromeWebSecurity: false,
    watchForFileChanges: false,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    experimentalSessionAndOrigin: true,
    trashAssetsBeforeRuns: true,
    video: true,
    videoUploadOnPasses: true,
    videoCompression: 51,
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
    
      // implement node event listeners here
    },
    env: {
      WebdriverUni_homepage: "https://www.webdriveruniversity.com/",
     first_name: "Env-variable1"
    }
  },
})
