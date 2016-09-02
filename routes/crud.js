//Basic Crud template

module.exports = function(router) {
	router.get('/crud', function(req,res){
		res.send('Apenas um exemplo de como funcionaria. Aqui teria os CRUDS gerais para todos os models que precisarem.');
	});

	return router;
}