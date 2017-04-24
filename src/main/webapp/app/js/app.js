(function(){
	
	var app = angular.module('vetz.app' , ['vetz.usuario', 'vetz.login']);
	
	app.factory('sessionInjector', ['ConstantesService', function(ConstantesService) {  
	    var sessionInjector = {
	        request: function(config) {
	            config.headers['x-session-token'] = ConstantesService.token;
	            return config;
	        }
	    };
	    return sessionInjector;
	}]);
	
	app.config(['$httpProvider', function($httpProvider) {  
	    $httpProvider.interceptors.push('sessionInjector');
	}]);
})();