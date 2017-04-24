(function(){
	var app = angular.module('vetz.login' , []);
	
	app.controller('LoginController' , ['$http' , '$scope' , 'ConstantesService' , 
              function($http , $scope , ConstantesService){
		var URL = 'http://'+window.location.host+'/'+window.location.pathname.split('/')[1]+'/ws/';
		var login = {"email": "thiago@thiago.com", "senha": "12331231"};
		
		$scope.autenticado1 = '';
		$scope.autenticado2 = '';
		
		$http.get(URL+'usuario/nome/Thiago Carvalho').success(function(data){
			$scope.autenticado1 = data;	
		}).error(function(data, status, headers, config){
			$scope.autenticado1 = data;
		});
		
		$http.get(URL+'login/autentica/?email='+login.email+"&senha="+login.senha).success(function(data){
			ConstantesService.token = data;
			$http.get(URL+'usuario/nome/Thiago Carvalho').success(function(data){
				$scope.autenticado2 = data;	
			}).error(function(data, status, headers, config){
				$scope.autenticado2 = data;
			});		
		}).error(function(data, status, headers, config){
			$scope.autenticado2 = data;
		});
		
	}]);
})();