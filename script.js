$(function(){
  var $form = $('#newItem');
  var $itemName = $('#itemName');
  var $todoList = $('#todoList');

  // on submit log new list item
  $form.on('submit', function(event) {
    event.preventDefault();
    var listItem = $('#itemName').val();
    console.log(listItem);

    // store new todo list item in array
    todoListItems.push(listItem);
    console.log(todoListItems);

    // append new item to page's todo list
    $todoList.append('<li class="item">' + listItem + '</li>');
  });

  // click event handler for list to add 'done' class when task item is click
  $todoList.on('click', '.item', function() {
    $(this).addClass('done');
    $(this).animate({opacity: '0.5'}, 1000);
  });

  // hard coded tasks:

});
  var todoListItems = ["make list", "style beautifully", "submit hw form"]
