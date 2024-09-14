/// <reference types="cypress" />
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
            launchOptions.args.push('--disable-dev-shm-usage')
            return launchOptions
        }

        return launchOptions
    });

    on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
    });

    on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
    });
}