(function(){
	var app = angular.module('vetz');
	
	app.factory('vetz.UsuarioWS', [ '$http', 'vetz.ParametroConst' , function($http , ParametroConst) {
		var URL = ParametroConst.url + 'usuario';
        var factory = { 
        	insere : function(usuario) {
                return $http.post(URL , usuario);
            },
            consultaPorEmail : function(email) {
                return $http.get(URL+"/email/"+email);
            },
            consultaPorNome : function(nome) {
                return $http.get(URL+"/nome/"+nome);
            },
            edita : function(usuario) {
                return $http.put(URL , usuario);
            },
            findAll : function() {
                return $http.get('http://localhost:8080/rest/api/users');
            },
        };
        return factory;
    } ]);
}());