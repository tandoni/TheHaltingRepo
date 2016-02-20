angular.module('fsm')
    .controller('FsmCtrl', ['$scope', 'FsmDataService', function($scope, FsmDataService) {
        $scope.start = 'start';
        console.log('started FsmCtrl');

        // FsmDataService.load(function(data) {
        //     console.log(data);
        // });
    }]);