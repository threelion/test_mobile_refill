var angular = require('angular');
require('angular-route');
require('@uirouter/angularjs');

var selectOperatorTemplate = require('./js/views/selectOperator');

var app = angular
	.module('mtApp', [
		'ui.router', 
		'ngRoute', 
		'selectOperatorModule'
	])

	.controller('MainCtrl', function($scope) {
		$scope.temporal_variable = 'Ok';
	})

	.config(function($stateProvider, $urlRouterProvider) {
    
    	$urlRouterProvider.otherwise('/selectOperator');
    
    	$stateProvider

	        .state('selectOperator', {
	            url: '/selectOperator',
	            views: {
	            	'content': selectOperatorTemplate
	            }
	        })
	        // .state('inputData', {
	        //     url: '/inputData',
	        //     views: {
	        //     	'content': inputDataTemplate
	        //     }
	        // })
})