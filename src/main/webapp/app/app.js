(function(){
	var app = angular.module('vetz' , ['ngRoute' , 'toaster']);
	
	app.config(['$routeProvider', '$httpProvider', function($routeProvider , $httpProvider){
    	//Iniciando requisicao get caso na exista
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};    
        }
        //Desabilitando cache do IE quando utilizamos requisicoes ajax
        $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
        $httpProvider.interceptors.push('headerInjection');
        
        $routeProvider
            .when('/login',{
                templateUrl: 'views/login/login.html',
                controller: 'vetz.LoginController'
            })
            .when('/usuario',{
                templateUrl: 'views/usuario/usuario.html',
                controller: 'vetz.UsuarioController'
            })
            .when('/animal',{
                templateUrl: 'views/animal/animal.html',
                controller: 'vetz.AnimalController'
            });
        
    }]);
	
	app.factory('headerInjection', ['vetz.VetzService', function(VetzService) {  
	    var sessionInjector = {
	        'request': function(config) {
	            config.headers['x-session-token'] = VetzService.token;
	            return config;
	        }
	    };
	    return sessionInjector;
	}]);
	
}());