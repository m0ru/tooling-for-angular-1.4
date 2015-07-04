/*
var factoryFun = function($log){
        $log.info('test-tag loading.');
        return {
            template: '<p> le directive haz loaded!</p>'
        };
}
factoryFun.$inject = ['$log'];
module.exports = factoryFun;*/

function testTag($log){
        $log.info('test-tag loading.');
        return {
            template: '<p> le directive haz loaded!</p>'
        };
}
testTag.$inject = ['$log'];
export default testTag;
