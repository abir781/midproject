var express = require('express');
var userModel = require('./../models/user-model');
var bookModel = require('./../models/book-model');
var router = express.Router();
var multer = require('multer');

router.post('/', function(req, res){
	var user = {
		age: req.body.age,
		hobby: req.body.hobby,
		place: req.body.place,
		
    };
    
    
    userModel.update(user, function(status){
        if(status){
            res.send("Inserted");
        }else{
            res.send("Error");
        }
        