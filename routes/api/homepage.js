var router = require('express').Router();
var mongoose = require('mongoose');
var auth = require('../auth');
var Pot = mongoose.model('Pot');

const publicAttributes = 'name description price primaryImageIndex images'

router.get('/', auth.optional, function (req, res, next) {
    Pot.find({active : true}).sort({rating:-1}).limit(5).select(publicAttributes).then((popularPotsData) => {
        Pot.find({tags : { $in : ['home']}, active : true}).limit(5).select(publicAttributes).then(hometag=>{
            Pot.find({tags : { $in : ['work']}, active : true}).limit(5).select(publicAttributes).then(worktag=>{
                Pot.find({tags : { $in : ['gift']}, active : true}).limit(5).select(publicAttributes).then(gifttag => {
                    Pot.find({active: true}).sort({createdAt : -1}).limit(5).select(publicAttributes).then(newArrivalsData=>{

                        if (popularPotsData)
                        return res.json({ popular : popularPotsData, types : {home : hometag, work: worktag, gift: gifttag}, newArrivals : newArrivalsData, success: true })
                    else
                        return res.json({ success: false })

                    })
                })
            })
        }
        )


       
    }).catch(() => res.json({ success: false }))
})

module.exports = router;
