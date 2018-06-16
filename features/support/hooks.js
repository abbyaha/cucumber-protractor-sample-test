// Set up and tear down before and after each test.
// Samples copied from https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/hooks.md

var {After, Before, AfterAll, BeforeAll} = require('cucumber');

  Before(function () {
    // This hook will be executed before all scenarios
  });
  
  Before({tags: "@foo"}, function () {
    // This hook will be executed before scenarios tagged with @foo
  });
  
  Before({tags: "@foo and @bar"}, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
  });
  
  Before({tags: "@foo or @bar"}, function () {
    // This hook will be executed before scenarios tagged with @foo or @bar
  });
  
  // You can use the following shorthand when only specifying tags
  Before("@foo", function () {
    // This hook will be executed before scenarios tagged with @foo
  });

  // Synchronous
  BeforeAll(function () {
    // perform some shared setup
  });
  
  // Asynchronous Callback
  BeforeAll(function (callback) {
    // perform some shared setup
  
    // execute the callback (optionally passing an error when done)
  });
  
  // Asynchronous Promise
  AfterAll(function () {
    // perform some shared teardown
    return Promise.resolve()
  });

  // Asynchronous Promise
  After(function () {
    // Assuming this.driver is a selenium webdriver
    return this.driver.quit();
  });
  