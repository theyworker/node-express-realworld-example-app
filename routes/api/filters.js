var router = require('express').Router();
var mongoose = require('mongoose');
var auth = require('../auth');
var Pot = mongoose.model('Pot');

const sizeNames = ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large']

router.get('/', auth.optional, function (req, res, next) {
    Pot.findOne({ active: true }).select('price').sort({ price: -1 }).then(maxPrice => {
        Pot.findOne({ active: true }).select('price').sort({ price: 1 }).then(minPrice => {
            Pot.find().distinct('colours').then(colours => {
                Pot.find().distinct('size').then(sizes => {
                    Pot.find().distinct('styleOfPainting').then(styles => {
                        res.json({
                            filters: {
                                price: {
                                    rangeMin: minPrice.price,
                                    rangeMax: maxPrice.price
                                },
                                colours: colours,
                                size: sizes.map(size=> sizeNames[size]),
                                more: {
                                    styleOfPainting: styles,

                                }
                            }
                        })
                    })
                })
            })
        })
    })
})





module.exports = router;