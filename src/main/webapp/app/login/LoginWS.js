(function(){
	var app = angular.module('vetz');
	
	app.factory('vetz.LoginWS', [ '$http', 'vetz.ParametroConst' , function($http , ParametroConst) {
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