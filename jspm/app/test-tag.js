function testTag($log){
        $log.info('test-tag loading.');
        return {
            template: '<p> le directive haz loaded!</p>'
        };
}
testTag.$inject = ['$log'];
export default testTag;
