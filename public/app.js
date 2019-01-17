$(document).ready(function(){
    $.getJSON("/api/list")
    .then(addList)

    $("#todoInput").keypress(function(event){
        if(event.which == 13) {
            createItem();
            document.getElementById("todoInput").value = "";
        }
    })

    $(".list").on("click", "li", function(){
        updateItem($(this))
    })
    
    $(".list").on("click", "span", function(e){
        e.stopPropagation();
        deleteItem($(this).parent())
    })
});

function addList(items) {
    items.forEach(function(item){
        addItem(item);
    })
}

function addItem(item) {
    var newItem = $("<li class='task'>" +item.name +"<span>X</span></li>");
    newItem.data("id", item._id);
    newItem.data("completed", item.completed)
    if (item.completed){
        newItem.addClass("done");
    }
    $(".list").append(newItem);
}

function createItem(){
    var userInput = document.getElementById("todoInput").value;
    $.post("/api/list", {name: userInput})
    .then(function(newItem){
        addItem(newItem)
    })
    .catch(function(err){
        console.log(err)
    });
}

function deleteItem(item){
    var itemId = item.data("id");
    $.ajax({
        method:"DELETE",
        url: "/api/list/" + itemId
    })
    .then(function(data){
        item.remove();
    })
}

function updateItem(item){
    var itemComp = item.data("id")
    var isDone = !item.data("completed");
    var updateData = {completed: isDone}
    $.ajax({
        method:"PUT",
        url: "/api/list/" + itemComp,
        data: updateData
    })
    .then(function(updateItem){
        item.toggleClass("done");
        item.data("completed", isDone);
    })
}