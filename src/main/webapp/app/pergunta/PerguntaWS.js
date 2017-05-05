(function(){
	var app = angular.module('carros');
	
	app.factory('carros.PerguntaWS', [ '$http', 'carros.ParametroConst' , function($http , ParametroConst) {
		var URL = ParametroConst.url + 'perguntas';
        var factory = { 
        	insere : function(pergunta) {
                return $http.post(URL , pergunta);
            },
            edita : function(pergunta) {
                return $http.put(URL , pergunta);
            },
            consultaTodos : function() {
            	return $http.get(URL);
            },
            consultaPorId : function(id) {
            	return $http.get(URL + "/"+id);
            },
            findByEmail : function(email) {
            	return $http.get(URL + "/user/"+email);
            },
            remove : function(id) {
            	return $http.delete(URL + "/"+id);
            },
            responder : function(idPergunta, resposta) {
            	return $http.post(URL + "/responder/"+idPergunta, resposta);
            },
        };
        return factory;
    } ]);
}());