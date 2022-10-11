/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { defineConfig } from 'cypress';

import _ from 'lodash';
import { unlinkSync } from 'fs';

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('after:spec', (_spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = _.some(results.tests, test => _.some(test.attempts, { state: 'failed' }));
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            return unlinkSync(results.video);
          }
        }
      });
    },
    baseUrl: 'https://www.onliner.by',
    viewportHeight: 720,
    viewportWidth: 1280,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporterConfig.json',
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: './cypress/reports/screenshots',
    videoUploadOnPasses: true,
    videoCompression: 15,
    videosFolder: './cypress/reports/videos',
  },
});
