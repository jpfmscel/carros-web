(function(){
	var app = angular.module('carros');
	
	app.factory('carros.ConsumoWS', [ '$http', 'carros.ParametroConst' , function($http , ParametroConst) {
		var URL = ParametroConst.url + 'consumo';
        var factory = { 
        	insere : function(consumo) {
                return $http.post(URL , consumo);
            },
            findAll : function() {
                return $http.get(URL);
            },
        };
        return factory;
    } ]);
}());