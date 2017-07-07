'use strict';

angular.module('clarionApp')

.config(['$stateProvider','$routeProvider','$locationProvider','$urlRouterProvider',
	function($stateProvider,$routeProvider,$locationProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise('/app/login');
		
	$stateProvider
	.state('app',{
		url: '/app',
		template: '<div ui-view></div>'
	})	
	.state('app.main',{
		abstract: true,
		url: '/main',
		templateUrl: 'views/app-main.html',
		controller: 'mainController'
	})
	.state('app.main.dashboard', {
		url: '/dashboard',
		templateUrl: 'views/dashboard.html',
		controller: 'dashboardCtrl',
		data: {
	        requiredLogin: false
	    }
	})
	.state('app.login', {
		url: '/login',
		templateUrl: 'views/login.html',
		controller: 'loginCtrl'
	});

	$locationProvider.hashPrefix('');

}]);