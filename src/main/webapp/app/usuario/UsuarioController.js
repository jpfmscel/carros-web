(function(){
	var app = angular.module('carros');
	
	app.controller('carros.UsuarioController' , ['$scope' , 'carros.carrosService' , 'carros.UsuarioWS' , 'toaster' , 'carros.ParametroConst' ,
	    function($scope, carrosService , UsuarioWS, toaster , ParametroConst){
		
		$scope.carrosService = carrosService;
		$scope.usuario = {name: '' , email: '' , password : ''};
			
		$scope.insere = function() {
			UsuarioWS.insere($scope.usuario).success(function(data){
				toaster.pop(ParametroConst.toaster_sucesso, ParametroConst.toaster_titulo_sucesso, data);
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
		$scope.edita = function() {
			UsuarioWS.edita($scope.usuario).success(function(data){
				toaster.pop(ParametroConst.toaster_sucesso, ParametroConst.toaster_titulo_sucesso, data);
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
		$scope.consultaPorEmail = function() {
			UsuarioWS.consultaPorEmail($scope.usuario.email).success(function(data){
				toaster.pop(ParametroConst.toaster_sucesso, ParametroConst.toaster_titulo_sucesso, data);
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
		$scope.consultaPorNome = function() {
			UsuarioWS.consultaPorNome($scope.usuario.nome).success(function(data){
				toaster.pop(ParametroConst.toaster_sucesso, ParametroConst.toaster_titulo_sucesso, data);
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
		$scope.findAll = function() {
			UsuarioWS.findAll().success(function(data){
				$scope.users = data;
				toaster.pop(ParametroConst.toaster_sucesso, ParametroConst.toaster_titulo_sucesso, data);
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
	}]);
}());