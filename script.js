//date stamp at top of page
var dateElement = document.querySelector("#currentDay");
//var Appointments = document.querySelectorAll("textarea");
//var TimeBlock = document.querySelectorAll(".description")
//var save = document.querySelectorAll(".saveBtn")


//runs savedata function after a save button is clicked
$(".saveBtn").click(function (event) {
    event.preventDefault();
    //saving to local  storage
    var saveData = $(this).siblings(".description").val(); //grabs value of any data in textarea (set to var TimeBlock)
    console.log(saveData);
    var hourID = $(this).parent().attr("id"); //grab the id of the parent above the textarea (hour ID's)
    console.log(hourID);
    localStorage.setItem(hourID, saveData); //sends to local storage.
});

//populates each hour block with saved data
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));

// gets time for top of page (simplified)
function TimeUpdate() {
    dateElement.textContent = moment().format("MMM DD, YYYY [at] hh:mm:ss A");
    // $("#currentDay").text(today);
    // dateElement.textContent = today
}
setInterval(TimeUpdate, 1000);

//asigns an integer value to hours for comparison to currentTime
//military 24 hour time format is used here.
var currentTime = moment().format('H');
var time9 = 9;
var time10 = 10;
var time11 = 11;
var time12 = 12;
var time1 = 13;
var time2 = 14;
var time3 = 15;
var time4 = 16;
var time5 = 17;

//debug loggers
console.log(currentTime);

//next we individually compare currentTime integer with the time block integer value for all 9 spots. 
//then, based on that mathematical comparison - we assign styling. 

//look up Each loop for below

// 9am timeblock
if (currentTime == time9) {
    $("#9am .description").addClass("present");
} else if (currentTime > time9) {
    $("#9am .description").addClass("past");
} else if (currentTime < time9) {
    $("#9am .description").addClass("future");
}

// 10am timeblock
if (currentTime == time10) {
    $("#10am .description").addClass("present");
} else if (currentTime > time10) {
    $("#10am .description").addClass("past");
} else if (currentTime < time10) {
    $("#10am .description").addClass("future");
}

// 11am timeblock
if (currentTime == time11) {
    $("#11am .description").addClass("present");
} else if (currentTime > time11) {
    $("#11am .description").addClass("past");
} else if (currentTime < time11) {
    $("#11am .description").addClass("future");
}

// 12pm timeblock
if (currentTime == time12) {
    $("#12pm .description").addClass("present");
} else if (currentTime > time12) {
    $("#12pm .description").addClass("past");
} else if (currentTime < time12) {
    $("#12pm .description").addClass("future");
}

// 1pm timeblock
if (currentTime == time1) {
    $("#1pm .description").addClass("present");
} else if (currentTime > time1) {
    $("#1pm .description").addClass("past");
} else if (currentTime < time1) {
    $("#1pm .description").addClass("future");
}

// 2pm timeblock
if (currentTime == time2) {
    $("#2pm .description").addClass("present");
} else if (currentTime > time2) {
    $("#2pm .description").addClass("past");
} else if (currentTime < time2) {
    $("#2pm .description").addClass("future");
}

// 3pm timeblock
if (currentTime == time3) {
    $("#3pm .description").addClass("present");
} else if (currentTime > time3) {
    $("#3pm .description").addClass("past");
} else if (currentTime < time3) {
    $("#3pm .description").addClass("future");
}

// 4pm timeblock
if (currentTime == time4) {
    $("#4pm .description").addClass("present");
} else if (currentTime > time4) {
    $("#4pm .description").addClass("past");
} else if (currentTime < time4) {
    $("#4pm .description").addClass("future");
}

// 5pm timeblock
if (currentTime == time5) {
    $("#5pm .description").addClass("present");
} else if (currentTime > time5) {
    $("#5pm .description").addClass("past");
} else if (currentTime < time5) {
    $("#5pm .description").addClass("future");
}

