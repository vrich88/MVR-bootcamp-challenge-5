// wrap all functions of java in a document call to check for ready status before loading functionality of task scheduler
$(document).ready(function () {
    ppfColoration();
    currentDateTime();
});
// global variables
    // pulls in the "real" date/time from dayjs for input into HTML
    let realDate = dayjs().format("dddd, MMMM D, YYYY"); /* console.log(realDate); */
    let realTime = dayjs().format("hh:mm A"); /* console.log(realTime); */
    // becomes the hour value of "H" from dayjs to assign a comparable value for functions
    let timeCount = dayjs().format("H"); /* console.log(timeCount); */

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

// functions
    // function to set & show the current date & time on the HTML
    function currentDateTime() {
        showDate = $("#currentDay").text(realDate);
        let showTime = document.createElement("p");
        $("header").append(showTime);
        showTime.textContent = realTime;
        };
    // function to review the id hour and apply past, present, future class and set the color associated with each
    function ppfColoration(){
        $(".time-block").each( function() {
            let schedule = parseInt(this.id); /* console.log(schedule); */
            if (schedule > timeCount ) {
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
            }
    })};




    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //



    // TODO: Add code to display the current date in the header of the page.