'use strict'

require('angular-input-masks');
require('ng-focus-on');
require('angular-flash-alert');


var controller = require('./operators-list-ctrl');
var operatorService = require('../../services/OperatorService');

angular.module('selectOperatorModule', ['ui.utils.masks', 'focusOn', 'ngFlash'])
    .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    }])
    .factory('OperatorService', ['$q', operatorService])
    .controller('OperatorsListCtrl', ['$scope', '$state', 'OperatorService', 'focus', 'Flash', controller]);

module.exports = {
    template: require('./operators-list.tpl'), 
    controller: 'OperatorsListCtrl'
};

