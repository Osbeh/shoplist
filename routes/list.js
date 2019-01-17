var express = require("express")
var router = express.Router();
var db = require("../models")
var helpers = require("../helpers/list")


router.route("/")
    .get(helpers.getList)
    .post(helpers.createList)


router.route("/:listId")
    .get(helpers.getListItem)
    .put(helpers.updateList)
    .delete(helpers.deleteList)

module.exports = router;