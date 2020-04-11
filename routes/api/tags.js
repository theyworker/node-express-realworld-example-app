var router = require('express').Router();
var mongoose = require('mongoose');
var Pot = mongoose.model('Pot');
var auth = require('../auth');

// return a list of tags
router.get('/', auth.optional, function (req, res, next) {
  Pot.find().distinct('tags').then(tagData=> res.json({tags: tagData}))
  })
  
  
  

module.exports = router;
