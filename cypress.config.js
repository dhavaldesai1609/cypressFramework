const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.google.com", // Change this to your application's URL
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000, // Wait time for elements before failing
    retries: 2, // Retries failed tests (useful for flakiness)
    video: false, // Disable video recording to save space
    screenshotOnRunFailure: true, // Capture screenshots on failures

    setupNodeEvents(on, config) {
      // Example: Add custom event listeners here
      on("before:run", () => {
        console.log("Starting Cypress tests...");
      });

      // Import Mochawesome for better reports (Optional)
      const mochawesome = require("mochawesome");
      on("after:run", (results) => {
        console.log("Tests completed!", results);
      });

      return config;
    },
  },

  reporter: "mochawesome", // Use Mochawesome for better HTML/JSON reports
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
});
