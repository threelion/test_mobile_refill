'use strict';

var current;
function OperatorService($q) {

    function getCurrent(){
        return current;
    }

    function select(selectedObject) {
        current = selectedObject;
    }

    function refill(data) {
        return simulateRefillingRequest(data);
    }

    function simulateRefillingRequest(data){
        var rnd = Math.random();

        if (rnd < 0.3) {
            return $q.reject({ 
                status: 503, 
                errorMessage: 'Sorry, service temporary unavailable! Try later please' 
            })
        } else {
            return $q.resolve({ 
                status: 200, 
                data:  data
            })
        }
    }

    return {
        current : getCurrent,
        select     : select,
        refill : refill,
    };
}

module.exports = OperatorService;