'use strict';

(function() {
	var app = angular.module('carros');

	app.constant("carros.ParametroConst", {
		"url" : location.origin + '/' + location.pathname.split('/')[1]
				+ '/api/',
		"toaster_sucesso" : 'success',
		"toaster_titulo_sucesso" : ':)',
		"toaster_erro" : 'error',
		"toaster_titulo_erro" : ':,(',
	});

}());