(function() {
    'use strict';

    angular
        .module('app')
        .factory('pinsFactory', pinsFactory);

    pinsFactory.$inject = ['$http'];

    /* @ngInject */
    function pinsFactory($http) {
        var service = {

            getAllPins: getAllPins

        };

        return service;

        ////////////////

        function getAllPins() {
        	return $http
        			.get('https://api.pinterest.com/v1/me/pins/?access_token=AaGWbxqUfvGXIHx-cYJu5jzjkGJtFJoexRD5aO1DtVp8e2ApmgAAAAA&fields=note%2Curl%2Cimage');
        }
    }
})();