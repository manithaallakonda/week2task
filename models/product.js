const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: Number,
    discount: Number,
    offerprice: Number,
    reviews: [String],
});

module.exports = mongoose.model('Product', productSchema);
