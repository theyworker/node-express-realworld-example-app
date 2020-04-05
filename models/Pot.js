var mongoose = require('mongoose');

var PotSchema = new mongoose.Schema(
    {
        name: String,
        description : String,
        price : Number,
        discountPrice : {type : Number, default: 0},
        colours : [{type : String}],
        styleOfPainting : String,
        placementSuggestions : [{type : String}],
        tags : [{type:String}],
        size : Number,
        material : String,
        stock: Number,
        active : Boolean
    }
);

PotSchema.pre('save', function(next){
    this.active = true;
    next();
})

PotSchema.methods.toJSONFor = function () {
    return{
        name: this.name,
        description : this.description,
        price : this.price,
        discountPrice : this.discountPrice,
        colours : this.colours,
        tags : this.tags,
        size : this.size,
        material : this.material,
        stand : this.stand,
        stock: this.stock
    }
}

mongoose.model('Pot', PotSchema)