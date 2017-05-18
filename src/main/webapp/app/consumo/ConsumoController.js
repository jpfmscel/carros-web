(function() {
	var app = angular.module('carros');

	app.controller('carros.ConsumoController', [
			'$scope',
			'carros.ConsumoWS',
			'toaster',
			'carros.ParametroConst',
			function($scope, ConsumoWS, toaster, ParametroConst) {

				$scope.consumos = {}
				$scope.consumo = {};

				var iniciaConsumo = function() {
					return {
						marcaCarro : '',
						modeloCarro : '',
						combustivel : 'g',
						valor : '',
					};
				};

				$scope.consumo = iniciaConsumo();

				$scope.insere = function() {
					ConsumoWS.insere($scope.consumo).success(
							function(data) {
								$scope.consumo = iniciaConsumo();
								toaster.pop(ParametroConst.toaster_sucesso,
										ParametroConst.toaster_titulo_sucesso,
										data);
							}).error(
							function(data, status, headers, config) {
								toaster.pop(ParametroConst.toaster_erro,
										ParametroConst.toaster_titulo_erro,
										data);
							});
				};

				$scope.findAll = function() {
					ConsumoWS.findAll().success(
							function(data) {
								$scope.consumos = data;
								toaster.pop(ParametroConst.toaster_sucesso,
										ParametroConst.toaster_titulo_sucesso,
										data);
							}).error(
							function(data, status, headers, config) {
								toaster.pop(ParametroConst.toaster_erro,
										ParametroConst.toaster_titulo_erro,
										data);
							});
				};

				$scope.findAll();

			} ]);
}());