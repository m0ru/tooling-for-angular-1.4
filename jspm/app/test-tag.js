export function factoryFun($log){
        $log.info('test-tag loading.');
        return {
            template: '<p> le directive haz loaded!</p>'
        };
}
factoryFun.$inject = ['$log'];

//var styles = {}
//export styles;

/*
var styles = {
    'test-tag' : {
        'background': 'gray';
    }
};*/
//export factoryFun as factoryFun
/*
export default {
    factoryFun
};
*/
