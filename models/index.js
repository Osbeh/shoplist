var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect('mongodb://localhost/shoplist')

mongoose.Promise = Promise;

module.exports.List = require("./list");