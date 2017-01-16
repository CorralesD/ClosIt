(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['pinsFactory'];

    /* @ngInject */
    function HomeController(pinsFactory) {
        var vm = this;
        vm.pins = [];

        activate();

        ////////////////

        function activate() {
            pinsFactory
                .getAllPins()
                .then(function(response) {
                    vm.pins = response.data;
                    console.log(vm.pins);
                })
                .catch(function(error) {
                    alert('An error occured. Please try again.');
                });

        }
    }
})();