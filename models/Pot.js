var mongoose = require('mongoose');

var PotSchema = new mongoose.Schema(
    {
        name: String,
        description : String,
        price : Number,
        discountPrice : {type : Number, default: 0},
        colours : [{type : String}],
        tags : [{type:String}],
        size : Number,
        material : String,
        stand : Boolean,
        stock: Number
    }
);

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