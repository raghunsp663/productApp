'use strict';
angular.module('clarionApp')
.controller('mainController', ['$scope','$localStorage','$state', function ($scope,$localStorage,$state){

	$scope.username = $localStorage.username;
	$scope.logout = function(){
		delete $localStorage.username;
		$state.go('app.login')
	};

}]);
