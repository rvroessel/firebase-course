// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');

***REMOVED****
***REMOVED*** @type { import("protractor").Config }
***REMOVED***/
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src***REMOVED*******REMOVED***.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome'
***REMOVED***
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
***REMOVED***
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
 ***REMOVED*****REMOVED***);
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
   ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED***));
***REMOVED***
***REMOVED***