var express = require('express');
var userModel = require('./../models/user-model');

var router = express.Router();

Router.get('/', function(req,res){
    if(req.session.username != null){
        req.redirect('/user');
    }else{
        res.render('login/index');
    }
});

router.post('/', function(req, res){
	
	var user = {
		username: req.body.username,
		password: req.body.password
	}

	userModel.validate(user, function(status){
		
		if(status){
			res.cookie('username', req.body.uname);
			res.redirect('/home');	
		}else{
			res.send('invalid username/password');
		}
	});

});
modult.exports = router;