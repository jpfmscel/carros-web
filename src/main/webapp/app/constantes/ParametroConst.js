'use strict';

(function(){
	var app = angular.module('vetz');
	
	app.constant("vetz.ParametroConst", {
		"url" : location.origin + location.pathname + 'ws/',
		"toaster_sucesso" : 'success',
		"toaster_titulo_sucesso" : ':)',
		"toaster_erro" : 'error',
		"toaster_titulo_erro" : ':,(',
	});
	
}());