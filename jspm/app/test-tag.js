export function factoryFun($log){
        $log.info('test-tag loading.');
        return {
            template: '<p> le directive haz loaded!</p>'
        };
}
factoryFun.$inject = ['$log'];

export const styles = {
    'test-tag' : {
        'background': 'gray'
    }
};
