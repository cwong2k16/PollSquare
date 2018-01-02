var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    username: String,
    googleId: String
});
var model = mongoose.model('user', Schema);

module.exports = model;