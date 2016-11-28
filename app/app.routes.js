(function(){
	'use strict'
	angular
		.module('mainApp')
		.config(function($routeProvider){
			$routeProvider
				.when('/tweets',{
					templateUrl: '/tweet/tweet.html',
					controller: 'tweetController',
					controllerAs: 'tweet'
				})
				.when('/users',{
					templateUrl: '/user/user.html',
					controller: 'userController',
					controllerAs: 'user'
				});
		});
})();