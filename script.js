//date stamp at top of page
var dateElement = document.querySelector("#currentDay");
function TimeUpdate () {
    var today = moment().format("MMM DD, YYYY [at] hh:mm:ss A");
    $("#currentDay").text(today);
    dateEl.textContent = today;
}
setInterval(TimeUpdate, 1000);



//moment().format('MMM DD, YYYY [at] hh:mm:ss a')

//momentchecker (gets time)
    //output pasttime or future times
    //sets styling 
    //class.classList.add("hide");




// saving to local  storage

