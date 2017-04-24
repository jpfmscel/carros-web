(function(){
	var app = angular.module('vetz.usuario' , []);
	
	app.controller('UsuarioController' , ['$http' , '$scope' , function($http , $scope){
		var URL = 'http://'+window.location.host+'/'+window.location.pathname.split('/')[1]+'/api/users/';
//		var usuarioNovo = { "nome": "Thiago Carvalho", "email": "thiago@thiago.com", "senha": "12331231", "animais": [ { "nome": "Titio", "raca": "Buldog", "dataNascimento": "26/10/1990", "genero": "M", "peso": 90, "cor": "Rosa", "especie": "Cachorro" }, { "nome": "Titio", "raca": "Buldog", "dataNascimento": "26/10/1990", "genero": "M", "peso": 90, "cor": "Rosa", "especie": "Cachorro" }, { "nome": "Titio", "raca": "Buldog", "dataNascimento": "26/10/1990", "genero": "M", "peso": 90, "cor": "Rosa", "especie": "Cachorro" } ] }  ;
		var usuarioNovo = { "nome": "Joao Seder", "email": "joao@joao.com", "senha": "123456", "animais": [ { "nome": "Tata", "raca": "RUSK", "dataNascimento": "26/10/1997", "genero": "F", "peso": 92.5, "cor": "Roxo", "especie": "Leão" }] }  ;
		
		$scope.consultaPorEmail = {};
		$scope.consultaPorNome = {};
		$scope.mensagemUpdate = '';
		$scope.mensagemInserido = '';
		
		$http.get(URL).success(function(data){
			alert(data);	
		}).error(function(data, status, headers, config){
			alert('Deu merda');
		});
		
		$http.get(URL+'email/joao@joao.com').success(function(data){
			$scope.consultaPorEmail = data;	
		}).error(function(data, status, headers, config){
			$scope.consultaPorEmail = data;
		});
		
		$http.get(URL+'nome/Thiago Carvalho').success(function(data){
			$scope.consultaPorNome = data;	
		}).error(function(data, status, headers, config){
			$scope.consultaPorNome = data;
		});
		
//		$http.put(URL+'insere' , usuarioNovo).success(function(data){
//			$scope.mensagemInserido = "Inseriou com sucesso!!!";	
//		}).error(function(data, status, headers, config){
//			$scope.mensagemInserido = "ocorreu algum erro";
//		});
		
	}]);
})();