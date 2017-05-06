(function(){
	var app = angular.module('carros');
	
	app.factory('carros.LoginWS', [ '$http', 'carros.ParametroConst' , function($http , ParametroConst) {
		var URL = ParametroConst.url + 'users';
        var factory = { 
        	autenticar : function(user) {
                return $http.post(URL+"/auth",user);
            },
            esqueciSenha : function(email) {
                return $http.get(URL+"/esqueciSenha/"+email);
            },
        };
        return factory;
    } ]);
}());