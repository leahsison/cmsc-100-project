var c = require('../db-connection');

exports.getTweets=(req,res)=>{
	c.query('SELECT * FROM TWEET', function(err, rows, fields) {
		if (!err){
			res.send(rows);
		}
	});
}