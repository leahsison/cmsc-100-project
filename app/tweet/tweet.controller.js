(function() {
	'use strict'
	angular
		.module('mainApp')
		.controller('tweetController', tweetController);

	function tweetController($http){
		var vm = this;

	      vm.tweet = [];
	      
	      $http.get('/tweets').then(
	        function(response){
	          if (response.data){
	            vm.tweet = response.data;
	          }
	        }
	      )
	}
})();