                                            /*        *Task One jQuery
                                             *  Insert The Result As Input Field */

btn = $("#btnAdd"); // selections
textBox = $("#taskInput");

btn.click(function () {
  // add button event
  let row = $("<div class = 'row'></div>"); // insert row element that's include all task elements
  row.appendTo(".tasksBox");
  myElement = textBox.clone();    // copy the Input Field 
  myElement.appendTo(row);
  doneButton = $("<button class= 'done'>Done</button>");
  doneButton.appendTo(row);
  let RemoveButton = $("<button class ='delete'>delete</button>");
  RemoveButton.appendTo(row);
  // let field = $(`<div>${myElement} ${RemoveButton}</div>`)
  RemoveButton = $(".delete");
  RemoveButton.click(function () {
    $(this).parent().remove();
  });
  doneButton.click(function (event) {
    console.log("mohand");
    console.log(event.target);
    $(event.target).parent().css({ backgroundColor: "#ed3a3a" });
  });
});
