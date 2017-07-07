'use strict';

angular.module('clarionApp')
.controller('dashboardCtrl', ['$scope','productService','$uibModal', function ($scope,productService,$uibModal){
	$scope.productObj = {};
	$scope.products = productService.list();

    $scope.saveProduct = function (product) {
        productService.create(product);
    };

    $scope.deleteProduct = function (id) {

        productService.delete(id);
        if ($scope.productObj.id === id){
        	$scope.productObj = {};	
        } 
    };

    $scope.editProduct = function (id) {
        $scope.productObj = angular.copy(productService.getDetails(id));
        var modalInstanceEdit = $uibModal.open({
	      templateUrl: 'views/editProductTemplate.html',
	      controller: 'ModalInstanceEditCtrl',
	      resolve: {
	        item: function () {
	          return $scope.productObj;
	        }
	      }
	    });  
	    modalInstanceEdit.result.then(function (product) {
	      $scope.saveProduct(product);
	    }, function () {
	      console.log('Modal dismissed');
	    });
    };

    $scope.open = function(){
    	var modalInstanceAdd = $uibModal.open({
	      templateUrl: 'views/addProductTemplate.html',
	      controller: 'ModalInstanceAddCtrl'
	    });  
	    modalInstanceAdd.result.then(function (product) {
	      $scope.saveProduct(product);
	    }, function () {
	      console.log('Modal dismissed');
	    });
    };
    

}])

.controller('ModalInstanceAddCtrl', ['$uibModalInstance','$scope','$timeout', function ($uibModalInstance,$scope,$timeout){
	$scope.onlyChars = /^[a-zA-Z ]+$/;	
	$scope.onlyNumbers = /^\d+$/;
	$scope.selected = $scope.productObj;
    $scope.save = function(isValid){
    	console.log(isValid);
    	if(isValid){
    		$uibModalInstance.close($scope.productObj);	
    	}
	    else
	    {
	        $timeout(function()
	        {
	          $scope.submitted = false;
	        }, 5000);
	    }
	};

	$scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	};
}])

.controller('ModalInstanceEditCtrl', ['$uibModalInstance','$scope','item', function ($uibModalInstance,$scope,item){
	$scope.onlyChars = /^[a-zA-Z ]+$/;	
	$scope.onlyNumbers = /^\d+$/;
	$scope.productObj = item;
	$scope.save = function () {
	    $uibModalInstance.close($scope.productObj);
	};

	$scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	};
}]);