'use strict';

angular.module('clarionApp')
.service('productService', function (){
    var Products = [{
	        'id': 0,
	        'name': 'T-shirt',
	        'rate': '500',
	        'quantity': '1000'
	    },
	    {
	        'id': 1,
	        'name': 'Jacket',
	        'rate': '1500',
	        'quantity': '500'
	    }
	];
	var counterID = 2;

	this.list = function () {
        return Products;
    };

    this.create = function (product) {
        if (product.id !== undefined) {
			for (var item in Products) {
                if (Products[item].id === product.id) {
                    Products[item] = product;
                }
            }            
        } 
        else 
        {
        	product.id = counterID++;
            Products.push(product);
        }
    };

    this.getDetails = function (id) {
        for (var item in Products) {
            if (Products[item].id === id) {
                return Products[item];
            }
        }
    };

    this.delete = function (id) {
        for (var item in Products) {
            if (Products[item].id === id) {
                Products.splice(item, 1);
            }
        }
    };


});