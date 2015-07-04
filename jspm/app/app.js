console.log("app.js");

var angular = require('angular');
//console.log(angular);


/*
angular.module('myModule', [
  require('angular-animate'),
  require('angular-mocks/ngMock'),
  require('angular-mocks/ngAnimateMock'),
  require('angular-i18n/en-us')
]);
*/


import testTag from './test-tag';
console.log(testTag);

/*
angular.module('myModule',[])
    .directive('testTag', require('app/test-tag'));
    */


angular.bootstrap(document, ['myModule'], {
  // make sure dependency injection works after minification
  // see https://docs.angularjs.org/guide/production
  // and https://docs.angularjs.org/guide/di#dependency-annotation
  strictDi: true
});
