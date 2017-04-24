(function(){
	var app = angular.module('vetz');
	
	app.factory('vetz.AnimalWS', [ '$http', 'vetz.ParametroConst' , function($http , ParametroConst) {
		var URL = ParametroConst.url + 'animal';
        var factory = { 
        	insere : function(animal) {
                return $http.post(URL , animal);
            },
            edita : function(animal) {
                return $http.put(URL , animal);
            },
            consultaTodos : function() {
            	return $http.get(URL);
            },
            consultaPorId : function(id) {
            	return $http.get(URL + "/"+id);
            },
            remove : function(id) {
            	return $http.delete(URL + "/"+id);
            },
            compartilha : function(compartilha) {
            	return $http.post(URL + "/compartilha?"+$.param(compartilha));
            },
        };
        return factory;
    } ]);
}());