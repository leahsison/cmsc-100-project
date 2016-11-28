(function(){
	'use strict'
	angular
		.module('mainApp')
		.controller('loginController', loginController);

	function loginController($http){
		var vm = this;

		vm.username="";
		vm.password="";
		vm.loginUser=loginUser;

		function loginUser(){
			var credentials={
				username: vm.username,
				password: vm.password
			}
			$http
				.post('/login', credentials)
				.then(function (response){
					var redirect = response.data.redirect;
					console.log(redirect);
					if (redirect === '/'){
						window.location.href=redirect;
					}	
				}, function (response){
				});
		}
	}

})();