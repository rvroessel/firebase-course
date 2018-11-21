// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e***REMOVED*******REMOVED***.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
***REMOVED***
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
***REMOVED***
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
 ***REMOVED*****REMOVED***);
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
***REMOVED***
***REMOVED***
