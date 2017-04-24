(function(){
	var app = angular.module('vetz');
	
	app.controller('vetz.LoginController' , ['$scope' , 'vetz.LoginWS' , 'vetz.VetzService' , 'toaster' , 'vetz.ParametroConst' ,
	    function($scope, LoginWS , VetzService , toaster , ParametroConst){
		
		$scope.vetzService = VetzService;
		$scope.login = {email: 'thiagocarvalhobcc@gmail.com' , senha: '123'};
		
		$scope.autenticar = function() {
			LoginWS.autenticar($scope.login).success(function(data){
				$scope.vetzService.token = data;
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