'use strict';

/**
 * @ngdoc function
 * @name elevateProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elevateProjectApp
 */
angular.module('elevateProjectApp')
  .controller('MainCtrl', function () {
    this.Products = [
      {
      	id:'prod_1',
      	name : 'Cotton-TShirt',
      	size: 'Medium',
      	price: 1.99,
      	quantity: 1,
      	cost: '$1.99' ,
      },
	    {
	  	id:'prod_2',
      	name : 'Baseball Camp',
      	size: 'One size',
      	price: 2.99,
      	quantity: 1,
      	cost: '$1.99',
      },
      {
      	id:'prod_3',
      	name : 'Swim Shorts',
      	size: 'Medium',
      	price: 1.99,
      	quantity: 1,
      	cost: '$1.99',
      }
    ];
    this.subtotal=0;

    this.increment = function(product){
    	product.quantity += 1;
    	this.updateTotal(); 
    };

    this.decrement = function(product){
    	if (product.quantity !=1) {
    		product.quantity -= 1;
    	}
    	this.updateTotal();
    };
    this.deleteItem = function(delElem){
    	this.Products.splice(delElem,1);
    	this.updateTotal();
    }

    this.updateTotal = function(){
    	var i;
    	this.subtotal=0; 
		for (i = 0; i < this.Products.length; i++){
			var product = this.Products[i];
			this.subtotal = this.subtotal + (product.price * product.quantity);
		}    	
    }

    this.updateTotal();
  });


