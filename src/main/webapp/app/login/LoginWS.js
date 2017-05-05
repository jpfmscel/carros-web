(function(){
	var app = angular.module('carros');
	
	app.factory('carros.LoginWS', [ '$http', 'carros.ParametroConst' , function($http , ParametroConst) {
		var URL = ParametroConst.url + 'login';
        var factory = { 
        	autenticar : function(login) {
                return $http.post(URL+"/autentica?"+$.param(login));
            },
            esqueciSenha : function(email) {
                return $http.get(URL+"/esqueciSenha/"+email);
            },
        };
        return factory;
    } ]);
}());