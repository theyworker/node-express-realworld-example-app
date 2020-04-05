var router = require('express').Router();
var auth = require('../auth');
var mongoose = require('mongoose');
var Pot = mongoose.model('Pot');

router.get('/', auth.optional, function (req, res, next) {
    const query = req.query
    var search = {};
    if (query.priceMin || query.priceMin)
        search.price = { $gt: query.priceMin, $lt: query.priceMax }

    if (query.colours)
        search.colours = { $in : [query.colours] }

    if (query.size)
        search.size = query.size

    Pot.find(search).then(response => {
        res.json({ results : response, success: true })
    }).catch(
        () => res.json({ success: false })
    )
    // res.json({...req.query, success : 8})
})

module.exports = router;