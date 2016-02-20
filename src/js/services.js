angular.module('fsm')
    .service('FsmDataService', ['$http', function($http) {
        console.log('loaded FsmDataService');

        this.load = function(callback) {
            console.log('loading fsm data');
            $http({
                    method: 'GET',
                    url: 'data/aStar.regex'
                }).then(function (data) {
                    callback(data.data);
            }, function (error) {
                console.log('Failure to retrieve fsm data', error);
            });
        };
    }]);