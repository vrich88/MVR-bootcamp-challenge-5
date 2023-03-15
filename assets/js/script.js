// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
    currentDateTime();
    ppfColoration();
    writeActivity();
    addActivity();
});
// variables within the wrapped call function
    // pulls in the "real" date/time from dayjs for input into HTML
    let realDate = dayjs().format("dddd, MMMM D, YYYY"); /* console.log(realDate); */
    let realTime = dayjs().format("hh:mm A"); /* console.log(realTime); */
    // becomes the hour value of "H" from dayjs to assign a comparable value for functions
    let timeCount = dayjs().format("H"); /* console.log(timeCount); */
// function to set & show the current date & time on the HTML
    function currentDateTime() {
        showDate = $("#currentDay").text(realDate);
        let showTime = document.createElement("p");
        $("header").append(showTime);
        showTime.textContent = realTime;
    };
// function to review the id hour and apply past, present, future class and set the color associated with each
    function ppfColoration() {
        $(".time-block").each( function() {
            let schedule = parseInt(this.id); /* console.log(schedule); */
                if (schedule > timeCount) {
                    $(this).addClass("future");
                    $(this).removeClass("present");
                    $(this).removeClass("past");
                } else if (schedule < timeCount) {
                    $(this).addClass("past");
                    $(this).removeClass("present");
                    $(this).removeClass("future");
                } else {
                    $(this).addClass("present");
                    $(this).removeClass("past");
                    $(this).removeClass("future");
        }})};
// function to save user input of activities in the time blocks into local storage
    function addActivity () {
        $(".saveBtn").on("click", function() {
            let svbtn = document.querySelector(".saveBtn");
            svbtn.addEventListener("click", addActivity)
            let activityPeriod = $(this).parent().attr("id"); /* console.log(activityPeriod); */
            let activityContent = $(this).siblings(".description").val(); /* console.log(activityContent); */
            localStorage.setItem(activityPeriod, activityContent);
        })};
// function to write the local storage to the html elements
    function writeActivity() {
        $(".time-block").on("click", function() {
                localStorage.getItem(activityPeriod);
                activityContent
        })};