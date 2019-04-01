var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProductSchema = new Schema({
    productName: String,
    productDescription: String,
    productCategory: String,
    productPrice: String,
    productImage: String,
    productSeller: String,
    isBestProduct: Boolean,
    isTopProduct: Boolean,
    productRating: Number
})

module.exports = mongoose.model('Product', ProductSchema)