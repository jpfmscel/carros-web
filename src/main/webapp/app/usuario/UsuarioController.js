(function(){
	var app = angular.module('vetz');
	
	app.controller('vetz.UsuarioController' , ['$scope' , 'vetz.VetzService' , 'vetz.UsuarioWS' , 'toaster' , 'vetz.ParametroConst' ,
	    function($scope, VetzService , UsuarioWS, toaster , ParametroConst){
		
		$scope.vetzService = VetzService;
		$scope.usuario = {nome: '' , email: '' , senha : ''};
			
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