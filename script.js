// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage? -->
  $(".saveBtn").click(function() {
    let thisTexValue = $(this).siblings(".description").val();
    let thisTimeBlock = $(this).parent().attr("id"); //Grabs the button's parent element's id.
    
    //Using a variable as a key to store the text from that key.(the respective time block's value)
    localStorage.setItem(thisTimeBlock, thisTexValue);
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  let currentDate = dayjs().format("MMM DD, YYYY");
  $("#currentDay").text(currentDate);
});




//ANIMATIONS METHODS
//.hide("seconds") -- hides element
//.show("seconds") -- shows element
// .delay("seconds") -- animates to hide and shows
// fadeout
// animate({height: "200px"}, seconds) -- example

//INDEX FILTER SELECTORS
//$("p:gt(2)").css(style here) -- 

//ATTRIBUTE FILTERS

// $("p[name^="]).css(style here)


//ATTR METHOD

// $('p:first').attr("class", "class-name"): -- will change the class 


//CLASS METHODS
// $("p").addClass("blue").removeClass("lead"); will add the "blue" class and remove "lead class";


//DOM TRAVERSAL

// $("h2").parents("section").siblings("header").children();


//EVENT BINDING

// $('h2').bind or click(function(){
//   $(this).toggleClass("blue");
// });