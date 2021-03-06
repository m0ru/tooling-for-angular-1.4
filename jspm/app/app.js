import angular from 'angular';

//import * as testTag from './test-tag';
import * as testTag from './test-tag';
angular.module('myModule',[])
     .directive('testTag', testTag.factoryFun);

angular.bootstrap(document, ['myModule'], {
  // make sure dependency injection works after minification
  // see https://docs.angularjs.org/guide/production
  // and https://docs.angularjs.org/guide/di#dependency-annotation
  strictDi: true
});

// ----------- <JSS> -----------------

// introduces a runtime overhead as these are generated on the client.
// it should be possible to write a preprocessor though
// a preprocessor like: https://www.npmjs.com/package/gulp-jss

/*
//TODO atm jss is included in index.html instead of via require
import jss from 'jss';
window.jss = jss;
*/

// the `true` deactivates autogenerating classnames
var sheet = jss.createStyleSheet(testTag.styles, true).attach();
/*
// add it as <style>-tag:
window.document.body.appendChild(sheet.element);
*/
/*
// apply it as inline style:
var testTagDomNode = window.document.querySelector('test-tag');
sheet.rules['test-tag'].applyTo(testTagDomNode);
*/

// ----------- </JSS> -----------------
