(function(){
	var app = angular.module('vetz');
	
	app.controller('vetz.AnimalController' , ['$scope' , 'vetz.AnimalWS' , 'toaster' , 'vetz.ParametroConst' , 
	    function($scope, AnimalWS, toaster , ParametroConst){
		
		$scope.emailCompartilha = '';
		$scope.animal = {};
		var iniciaAnimal = function() { return {nome: '' , raca: '' , dataNascimento: '' , genero: '' , peso: '' , cor : '' , especie : ''}; };
		$scope.animal = iniciaAnimal();
		$scope.animais = [];
		
		$scope.insere = function() {
			$scope.animal.id = null;
			AnimalWS.insere($scope.animal).success(function(data){
				$scope.consultaTodos();
				$scope.animal = iniciaAnimal();
				toaster.pop(ParametroConst.toaster_sucesso, ParametroConst.toaster_titulo_sucesso, data);
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
		$scope.edita = function() {
			AnimalWS.edita($scope.animal).success(function(data){
				$scope.consultaTodos();
				$scope.animal = iniciaAnimal();
				toaster.pop(ParametroConst.toaster_sucesso, ParametroConst.toaster_titulo_sucesso, data);
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
		$scope.consultaTodos = function () {
			AnimalWS.consultaTodos($scope.animal).success(function(data){
				$scope.animais = data;
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
		$scope.consultaAnimal = function(id) {
			AnimalWS.consultaPorId(id).success(function(data){
				$scope.animal = data;
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
		$scope.removeAnimal = function(id) {
			AnimalWS.remove(id).success(function(data){
				$scope.consultaTodos();
				toaster.pop(ParametroConst.toaster_sucesso, ParametroConst.toaster_titulo_sucesso, data);
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
		$scope.compartilha = function(idAnimal) {
			var compartilha = {'idAnimal' : idAnimal , 'email' : $scope.emailCompartilha};
			AnimalWS.compartilha(compartilha).success(function(data){
				$scope.consultaTodos();
				toaster.pop(ParametroConst.toaster_sucesso, ParametroConst.toaster_titulo_sucesso, data);
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		}
		
		$scope.consultaTodos();
	}]);
}());