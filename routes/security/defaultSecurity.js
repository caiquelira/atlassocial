module.exports = function(result, req, methodType){
	console.log(result._id);
	console.log(req.session._id);
	if(result._id == req.session._id){
		return true;
	}
	return true;
}