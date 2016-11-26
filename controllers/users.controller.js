var c = require('../db-connection');

exports.loginUser=(req, res)=>{
	c.query('SELECT username, password FROM user WHERE username = ?', [req.body.username], function(err, rows){
		if (err) throw err;
		if (rows[0] && rows[0].password === req.body.password){
			req.session.username = req.body.username;
			res.json({ redirect: '/' });
		}else{
			res.json({ redirect: '/login'});
		}
	});
}

exports.logoutUser=(req, res)=>{
	delete req.session.username;
	res.redirect('/login');
}