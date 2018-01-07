/*
How this should look like:
{
chartname: String, // name of title
options: Array // will be a json object like [{"superman": 1, "goku":1, "saitama": 1}; numbers representing unique votes
voters: Array // will be a json object like [{"bob":"superman", "alice":"saitama", "chris": "goku"}];
}
*/


var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    title: String,
    options: Array,
    voters: Array
});
var model = mongoose.model('polls', Schema);

module.exports = model;