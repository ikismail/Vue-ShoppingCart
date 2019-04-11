var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ShippingDetailSchema = new Schema({
    address1: String,
    address2: String,
    country: String,
    zipCode: String,
    shippingDate: String,
    products: Array,
    userId: String,
    totalPrice: String
})

module.exports = mongoose.model('ShippingDetail', ShippingDetailSchema)