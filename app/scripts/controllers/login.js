'use strict';
angular.module('clarionApp')
.controller('loginCtrl', ['$scope','$state','$timeout','$localStorage',
	function ($scope,$state,$timeout,$localStorage){

		$scope.passPattern = /(?=.*[A-Z])/;
		$scope.user = {};
		var userDetails = {
			'email': 'clarion@clarion.com',
			'password': 'Clarion123'
		};
		$scope.login = function(isValid)
		{	
			console.log(isValid);
			if(isValid)
			{
				if(userDetails.email === $scope.user.email && 
					userDetails.password === $scope.user.password)
				{
					$localStorage.username = $scope.user.email.split('@')[0];
					$state.go('app.main.dashboard');
				}
				else
				{
					$scope.wrongCredential = true;
					console.log('Username/password is not correct');
				}
			}
			else
			{
				$timeout(function()
				{
					$scope.submitted = false;
					$scope.wrongCredential = false;
				}, 5000);
			}
		};
  }]);
