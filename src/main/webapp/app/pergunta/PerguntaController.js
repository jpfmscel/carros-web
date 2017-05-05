(function(){
	var app = angular.module('carros');
	
	app.controller('carros.PerguntaController' , ['$scope' , 'carros.PerguntaWS' , 'toaster' , 'carros.ParametroConst' , 
	    function($scope, PerguntaWS, toaster , ParametroConst){
		
		$scope.pergunta = {};
		
		var iniciaPergunta = function() { return {texto: '' , marcaCarro: '' , modeloCarro: ''}; };
		
		$scope.pergunta = iniciaPergunta();
		$scope.perguntas = [];
		$scope.perguntasUser = [];
		$scope.email = '';
		
		$scope.insere = function() {
			$scope.pergunta._id = null;
			PerguntaWS.insere($scope.pergunta).success(function(data){
				$scope.consultaTodos();
				$scope.pergunta = iniciaPergunta();
				toaster.pop(ParametroConst.toaster_sucesso, ParametroConst.toaster_titulo_sucesso, data);
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
		$scope.consultaTodos = function () {
			PerguntaWS.consultaTodos($scope.pergunta).success(function(data){
				$scope.perguntas = data;
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
		$scope.consultaPergunta = function(id) {
			PerguntaWS.consultaPorId(id).success(function(data){
				$scope.pergunta = data;
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
		$scope.removePergunta = function(id) {
			PerguntaWS.remove(id).success(function(data){
				$scope.consultaTodos();
				toaster.pop(ParametroConst.toaster_sucesso, ParametroConst.toaster_titulo_sucesso, data);
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
		$scope.findByEmail = function() {
			PerguntaWS.findByEmail($scope.email).success(function(data){
				$scope.perguntasUser = data;
				toaster.pop(ParametroConst.toaster_sucesso, ParametroConst.toaster_titulo_sucesso, data);
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
		$scope.responder = function(idPergunta) {
			var iniciaResposta = function() { return {texto: 'Resposta teste '+new Date() , respostaCurta: true }; };
			$scope.resposta = iniciaResposta();
			PerguntaWS.responder(idPergunta, $scope.resposta).success(function(data){
				toaster.pop(ParametroConst.toaster_sucesso, ParametroConst.toaster_titulo_sucesso, data);
			}).error(function(data, status, headers, config){
				toaster.pop(ParametroConst.toaster_erro, ParametroConst.toaster_titulo_erro, data);
	        });
		};
		
		$scope.consultaTodos();
	}]);
}());