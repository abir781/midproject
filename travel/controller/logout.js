var express=require('express');
var router=express.Router();

router.get('/', function(req,res){
    req.session.email=null;
    req.session.username=null;
    req.redirect('/home');
});
module.exports = router;