                                            /*        *Task One jQuery
                                             *  Insert The Result As Text Into Div */
                                            
btn = $("#btnAdd"); // selections
textBox = $("#taskInput");

btn.click(function () {
    console.log(textBox.val())
  // add button event
  let row = $(`
  <div class = "row">
  <div class="result">${textBox.val()}</div> 
  <button class= 'done'>Done</button> 
  <button class ='delete'>delete</button>
  </div>`); // insert row element that's include all task elements
  $(".tasksBox").append(row);
  
  $(".delete").click(function () {
    $(this).parent().remove();
  });
  $(".done").click(function (event) {
    $(event.target).parent().css({ backgroundColor: "#ed3a3a" });
  });
});
