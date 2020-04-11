var mongoose = require('mongoose');

var PotSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        price: Number,
        discountPrice: { type: Number, default: 0 },
        colours: [{ type: String }],
        styleOfPainting: String,
        placementSuggestions: [{ type: String }],
        tags: [{ type: String }],
        size: Number,
        material: String,
        stock: Number,
        active: Boolean,
        rating: Number,
        images: [{ type: String }],
        primaryImageIndex: { type: Number, default: 0 },
        createdAt: Date
    }
);

PotSchema.pre('save', function (next) {
    this.active = true;
    this.rating = Math.random() * 10;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    this.createdAt = today;
    next();
})

PotSchema.methods.toJSONFor = function () {
    return {
        name: this.name,
        description: this.description,
        price: this.price,
        discountPrice: this.discountPrice,
        colours: this.colours,
        tags: this.tags,
        size: this.size,
        material: this.material,
        stand: this.stand,
        stock: this.stock
    }
}

mongoose.model('Pot', PotSchema)