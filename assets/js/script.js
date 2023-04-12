var currentDay = moment();
var currentHour = currentDay.hour();
var currenDayEl = $("#currentDay");

// display current day and time.
currenDayEl.text(currentDay.format("dddd, MMMM Do YYYY"));




