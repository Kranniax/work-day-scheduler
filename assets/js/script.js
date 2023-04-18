var currentDay = moment();
var currentHour = currentDay.hour();
var currenDayEl = $("#currentDay");

// display current day and time.
currenDayEl.text(currentDay.format("dddd, MMMM Do YYYY"));

// check each time block against the current time.
var timeBlockUpdate = function () {
  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").replace("hour-", ""));

    if (timeBlock < currentHour) {
      $(this).addClass("past");
    } else if (timeBlock === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
};

$(".saveBtn").on("click", function (){

  // grab event description from textarea.
  var eventDescription = $(this).siblings(".description");
  console.log(eventDescription);
  // get time-block id for this description.
  // save information to local storage.  
});

timeBlockUpdate();

// check time blocks frequently againt current hour.



// load saved time block events.

