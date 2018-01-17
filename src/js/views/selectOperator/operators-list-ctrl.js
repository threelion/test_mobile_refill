'use strict';

import { OPERATORS } from '../../constants/operators';

function OperatorsListCtrl($scope, $state, OperatorService, focus, Flash) {

	var message, flashWindow;

	$scope.operators = OPERATORS;

	function init(){
		$scope.selectedOperator = undefined;

		$scope.userData = {
			amount: 100,
			phone: "9000000000",
		}

		$scope.showInfo = {
			active: false,
			msg: "",
			success: false,
		};

		clearValidationErrors();

		Flash.clear();
	}

	function clearValidationErrors(){
		$scope.validationErrors = {
			phone: undefined,
			amount: undefined
		}

		Flash.clear();
	}

	init();

	$scope.selectOperator = function(operator) {
		$scope.selectedOperator = operator;
		focus('phone');
	};

	$scope.goBack = function() {
		init();
	}

	$scope.refill = function() {

		if (isUserDataValid()){
			var data = $scope.userData;
			data.operatorId = $scope.selectedOperator.id;

			OperatorService.refill(data)
				.then(function(data){
					console.log('Успешно пополнен!');

					$scope.showInfo = {
						active: true,
						msg: makeSuccessMessage(data),
						success: true,
					}

				}, 
				function(err){
					console.log(err.errorMessage);

					$scope.showInfo = {
						active: true,
						msg: err.errorMessage,
						success: false,
					}

				})
		} else {
			message = makeValidationErrorMessage($scope.validationErrors);
			flashWindow = Flash.create('danger', message, 5000, {class: 'custom-class', id: 'custom-id'}, true);
		}
	}

	function makeSuccessMessage(data){

		console.log(data);

		var result = "Телефонный номер " + data.data.phone + " успешно пополнен! Вы скоро получите об этом sms";
		
		return result;
	}

	$scope.closeInfo = function(){
		$scope.showInfo = {
			active: false,
			msg: "",
			success: false,
		};

		init();
	}

	function makeValidationErrorMessage(errors){
		var result = "";

		if (errors.phone)
			result += '<br>' + errors.phone;

		if (errors.amount)
			result += '<br>' + errors.amount;

		if (result.length > 0){
			result = result.substr(4, result.length - 4);	
		}

		return result;
	}

	function isUserDataValid(){
		var o = $scope.userData;
		var result = true;

		clearValidationErrors();

		if (o.amount < 1 || ! o.amount) {
			$scope.validationErrors.amount = "Сумма должна быть положительной!";
			focus('amount');
			result = false;
		}

		if (o.amount > 1000) {
			$scope.validationErrors.amount = "Сумма пополнения не должна превышать 1 000 руб!";
			focus('amount');
			result = false;
		}

		if (! o.phone) {
			$scope.validationErrors.phone = "Неверный номер телефона!";
			focus('phone');
			result = false;
		}

		// console.log($scope.validationErrors);

		return result
	}

	$scope.onTextClick = function($event){
		$event.target.select();
	}
}

module.exports = OperatorsListCtrl; 