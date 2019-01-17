var db = require("../models")

exports.getList = function(req, res){
    db.List.find()
    .then(function(list){
        res.json(list)
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.createList = function(req, res) {
    db.List.create(req.body)
    .then(function(newItem){
        res.status(201).json(newItem)
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.getListItem = function(req, res){
    db.List.findById(req.params.listId)
    .then(function(foundList){
        res.json(foundList)
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.updateList = function(req, res){
    db.List.findOneAndUpdate({_id: req.params.listId}, req.body, {new: true})
    .then(function(list){
        res.json(list)
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.deleteList = function(req, res){
    db.List.remove({_id: req.params.listId})
    .then(function(){
        res.json({message: "Deleted"})
    })
    .catch(function(err){
        res.send(err)
    })
}

    
    module.exports = exports;