console.log("app.js");

var angular = require('angular');
console.log(angular);


/*
angular.module('myModule', [
  require('angular-animate'),
  require('angular-mocks/ngMock'),
  require('angular-mocks/ngAnimateMock'),
  require('angular-i18n/en-us')
]);
*/


angular.module('myModule',[])
    .directive('testTag', [function(){
        return {
            template: '<p> le directive haz loaded!</p>'
        };
    }]);
    

angular.bootstrap(document, ['myModule'], {
  // make sure dependency injection works after minification
  // see https://docs.angularjs.org/guide/production
  // and https://docs.angularjs.org/guide/di#dependency-annotation
  strictDi: true 
});
