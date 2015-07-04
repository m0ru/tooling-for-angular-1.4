console.log("app.js");

var angular = require('angular');

//import testTag from './test-tag';
//console.log(testTag);

class Foo {
    bar() { return 2 }
}
var f = new Foo();

angular.bootstrap(document, ['myModule'], {
  // make sure dependency injection works after minification
  // see https://docs.angularjs.org/guide/production
  // and https://docs.angularjs.org/guide/di#dependency-annotation
  strictDi: true
});
