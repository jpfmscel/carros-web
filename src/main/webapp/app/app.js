(function() {
	var app = angular.module('carros', [ 'ngRoute', 'toaster' ]);

	app.config([ '$routeProvider', '$httpProvider',
			function($routeProvider, $httpProvider) {
				// Iniciando requisicao get caso na exista
				if (!$httpProvider.defaults.headers.get) {
					$httpProvider.defaults.headers.get = {};
				}
				// Desabilitando cache do IE quando utilizamos requisicoes ajax
				$httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
				$httpProvider.interceptors.push('headerInjection');

				$routeProvider.when('/login', {
					templateUrl : 'views/login/login.html',
					controller : 'carros.LoginController'
				}).when('/usuario', {
					templateUrl : 'views/usuario/usuario.html',
					controller : 'carros.UsuarioController'
				}).when('/pergunta', {
					templateUrl : 'views/perguntas/perguntas.html',
					controller : 'carros.PerguntaController'
				}).when('/consumo', {
					templateUrl : 'views/consumo/consumo.html',
					controller : 'carros.ConsumoController'
				});

			} ]);

	app.factory(
					'headerInjection',
					[
							'carros.carrosService',
							function(carrosService) {
								var sessionInjector = {
									'request' : function(config) {
										config.headers['x-session-token'] = carrosService.token;
										return config;
									}
								};
								return sessionInjector;
							} ]);

}());