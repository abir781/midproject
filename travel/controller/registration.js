var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(req, res){
	res.render('registration/index');
});
router.post('/', function(req, res){
    var user = {
       
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        number: req.body,number
    };
})
    if(req.body.username == ""){
        res.send("username can't be empty");
    }
    if(req.body.username.length < 3 ){
        res.send("name must be 3 character long");
    }
    if(req.body.username.length>10){
        res.send("name can't be more than 10 character");
    }
    if(req.body.password.length < 2 ){
        res.send("password must be 3 character long");
    }
    if(req.body.password.length > 6 ){
        res.send("password can't be more than 6 character");
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!(req.body.email.match(mailformat))){
		res.send("Please enter valid email");
    }
    var phoneno =/^\d(11)$/;
    if(!(req.body.number.match(phoneno))){
        res.send("please enter valid phone number");
    }
    userModel.validateEmail(req.body.email, function(result){
		if(result.length > 0){
			res.send("This email is already registered.");
		}
		else{
			userModel.insert(user, function(status){
				if(status){
					res.send("Inserted");
				}else{
					res.send("Error");
				}
			});
});
    
