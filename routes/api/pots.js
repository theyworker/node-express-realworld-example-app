var router = require('express').Router();
var auth = require('../auth');
var mongoose = require('mongoose');
var Pot = mongoose.model('Pot');


router.post('/', auth.optional, function(req, res,next){
    var pot = new Pot(req.body.pot)
    return pot.save().then(function(){
        res.json({"sucess": true})
    })
})

router.get('/:pot', auth.optional, function(req,res,next){
    console.log("pot requested > ", req.body.pot)
    return res.json({pot: {...req.body.pot}})
})
module.exports = router;