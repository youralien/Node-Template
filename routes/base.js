module.exports.home = function (req, res) {
	var pageData = {};
	res.render('index', pageData);
};