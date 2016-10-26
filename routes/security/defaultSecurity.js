module.exports = function(result, req, methodType){
	if(result._id == req.session._id){
		return true;
	}
	return true;
}