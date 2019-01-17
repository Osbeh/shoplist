//name, completed, createddate
var mongoose = require("mongoose");

var listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name cannot be blank"
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var List = mongoose.model("List", listSchema)

module.exports = List;