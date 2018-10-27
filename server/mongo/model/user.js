var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    uid: String,
    name: String,
    email: String,
    password: String,
    user_avatar: String,
    phoneNumber: Number,
    createdOn: String
})

module.exports = mongoose.model('User', UserSchema)