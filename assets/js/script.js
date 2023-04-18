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

$(".saveBtn").on("click", function () {
  // grab event description from textarea.
  var eventDescription = $(this).siblings(".description").val();

  // get time-block id for this description.
  var eventTimeBlock = $(this).parent().attr("id");

  // save information to local storage.
  localStorage.setItem(eventTimeBlock, eventDescription);
});

timeBlockUpdate();

// check time blocks frequently againt current hour.
setInterval(timeBlockUpdate, 30000);

// load saved time block events.
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
