console.log("app.js");

import angular from 'angular';

import testTag from './test-tag';
angular.module('myModule',[])
     .directive('testTag', testTag);

angular.bootstrap(document, ['myModule'], {
  // make sure dependency injection works after minification
  // see https://docs.angularjs.org/guide/production
  // and https://docs.angularjs.org/guide/di#dependency-annotation
  strictDi: true
});
