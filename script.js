//date stamp at top of page
var dateElement = document.querySelector("#currentDay");
var Appointments = document.querySelector("textarea");
var TimeBlock = document.getElementsByClassName(".description")

// gets time for top of page
function TimeUpdate () {
    var today = moment().format("MMM DD, YYYY [at] hh:mm:ss A");
    $("#currentDay").text(today);
    dateElement.textContent = today;
    momentChecker();
}
setInterval(TimeUpdate, 1000);


//debug loggers
console.log(TimeBlock)

//gets time and assigns styling.
function momentChecker (){
    var hour = moment().format('H'); //grabs hour in 24hr format
    console.log(hour);
    if (hour == TimeBlock.id) { //compares hour to timeblock ID value
        TimeBlock.classList.remove("past"); //removes default styling
        TimeBlock.classList.add("present"); //assigns present
        console.log(TimeBlock);
        console.log(TimeBlock.id);
        console.log(TimeBlock.classList);

    } else if (hour < TimeBlock.id){ // if not present, then:
        TimeBlock.classList.remove("past"); //removes default styling
        TimeBlock.classList.remove("present"); // removes present if applicable
        TimeBlock.classList.add("future"); // adds future styling
        console.log(TimeBlock.classList);
    }
};

//saving to local  storage
        //grab by text area


//moment().format('MMM DD, YYYY [at] hh:mm:ss a')

