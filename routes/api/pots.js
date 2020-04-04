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
Pot.findById(req.params.pot).then((response)=> {
    if(response)
    return res.json({pot: {...response._doc}, success : true})

    else
    return res.json({success : false})
})

  

// return res.json({ sucess : false})
})
module.exports = router;