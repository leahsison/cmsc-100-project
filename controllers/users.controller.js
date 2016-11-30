var c = require('../db-connection');

exports.loginUser=(req, res)=>{
	c.query('SELECT username, password FROM USER WHERE username = ?', [req.body.username], function(err, rows){
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

exports.addUser=(req,res)=>{
	var newUser = {
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		name: req.body.name
	};

	c.query('INSERT INTO USER VALUES(0, :username, :email, :password, :name', newUser, function(err, results) {
		if (err) {
      console.log(err);
    }
    else {
    	console.log(results);
    	res.send({success: 'Successfully added: ' + newUser.username, id: results.info.insertId});
    };
   });
}

exports.getUsers=(req, res)=>{
	c.query('SELECT * FROM USER', function(err, rows, fields) {
		if (!err){
			res.send(rows);
		}
	});
}

exports.getUser=(req,res)=>{
  c.query('SELECT * FROM USER WHERE username = (?)', [req.params.userid], function(err, rows){
    if (!err){
      res.send(rows[0]);
    }
  });
}

exports.getFollowers=(req,res)=>{
  c.query('SELECT followers FROM USER_FOLLOWS_USER WHERE fina_follow = :userid', [req.params.userid], function(err, rows){
    if (!err){
			res.send(rows);
	}
  });
}

exports.getFollowing=(req,res)=>{
  c.query('SELECT fina_follow FROM USER_FOLLOWS_USER WHERE followers = :userid', [req.params.userid], function(err, rows){
    if (!err){
			res.send(rows);
		}
  });
}


exports.updateUser=(req,res)=>{
	var updateUser = {
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		name: req.body.name
	};

	c.query('UPDATE USER SET username=:username, email=:email, password=:password, name=:name', updateUser, function(err, results) {
		if (err) {
      console.log(err);
    }
    else {
    	console.log(results);
    	res.send({success: 'Successfully added: ' + newUser.username, id: results.info.insertId});
    };
   });
}

exports.deleteUser=(req,res)=>{
  c.query('DELETE FROM USER WHERE userid = (?)', [req.params.userid], function(err, rows){
    if (err){
      console.log(err);
    }else{
      res.send({});
    }
  });
}
