(function(){
	var app = angular.module('carros');
	
	app.controller('carros.LoginController' , ['$scope' , 'carros.LoginWS' , 'carros.carrosService' , 'toaster' , 'carros.ParametroConst' ,
	    function($scope, LoginWS , carrosService , toaster , ParametroConst){
		
		$scope.carrosService = carrosService;
		$scope.user = {email: '' , password: ''};
		
		$scope.autenticar = function() {
			LoginWS.autenticar($scope.user).success(function(data){
				$scope.carrosService.token = data;
				var mensagem = 'Logado com sucesso token : '+ data;
				toaster.pop(ParametroConst.toaster_sucesso, ParametroConst.toaster_titulo_sucesso, mensagem);
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
		$scope.esqueciSenha = function() {
			LoginWS.esqueciSenha($scope.login.email).success(function(data){
				toaster.pop(ParametroConst.toaster_sucesso, ParametroConst.toaster_titulo_sucesso, data);
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
	}]);
}());