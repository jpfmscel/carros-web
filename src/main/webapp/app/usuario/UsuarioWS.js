(function() {
	var app = angular.module('carros');

	app.factory('carros.UsuarioWS', [ '$http', 'carros.ParametroConst',
			function($http, ParametroConst) {
				var URL = ParametroConst.url + 'users';
				var factory = {
					insere : function(usuario) {
						return $http.post(URL, usuario);
					},
					consultaPorEmail : function(email) {
						return $http.get(URL + "/email/" + email);
					},
					consultaPorNome : function(name) {
						return $http.get(URL + "/name/" + name);
					},
					edita : function(usuario) {
						return $http.put(URL, usuario);
					},
					findAll : function() {
						return $http.get(URL);
					},
				};
				return factory;
			} ]);
}());