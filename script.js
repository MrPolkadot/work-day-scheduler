
$(function () {
  //Listener for click events on the save button. Saves input dat into local storage
  $(".saveBtn").click(function () {
    let thisTimeBlock = $(this).parent().attr("id");
    let thisTextValue = $(this).siblings(".description").val(); //Grabs the button's parent element's id.

    //Using a variable as a key to store the text from that key.(the respective time block's value)
    localStorage.setItem(thisTimeBlock, thisTextValue);
  });


  
  let currentTime = dayjs().hour(); // Gets current time
  
  //Will iterate over the "time-block class" and executes a function for each matched element
  $(".time-block").each(function () {
     /* Code breakdown */
  let hourBlockInt = parseInt($(this).attr("id").split("hour-")[1]);
  // parseInt method will return an integer from the string we input inside the method
  // "$(this)" will reference the container ".time-block" 
  // .attr("id") grabs the id of $(this) 
  // .split("hour-")[1]) will then split the string value of the id and return the second index of the split string object

    //Applies the past, present, or future class to each time respectively
    if (hourBlockInt < currentTime) {
      $(this).addClass("past");
    } else if (hourBlockInt === currentTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  //Gets any user input that was saved in localStorage and sets the values of the corresponding textarea elements.
  $("#hour-09 .description").val(localStorage.getItem("hour-09")); 
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  //Displays the current date in the header of the page.
  let currentDate = dayjs().format("MMMM DD, YYYY");
  $("#currentDay").text(currentDate);
});