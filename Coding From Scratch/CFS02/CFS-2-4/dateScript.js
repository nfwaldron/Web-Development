//Date Object - used to work with time and dates.

var today = new Date();
//milliseconds
var mSeconds = new Date(73284732);
//date as string
var dateStr = new Date("January 12, 2012");
//year, month, day,hours,minutes,seconds,milliseconds
var longDate = new Date(2003, 00, 20, 2, 2, 2, 2);

console.log(today);
console.log(mSeconds);
console.log(dateStr);
console.log(longDate);

//Getting the day value
var day = new Date();
var dayNumber = day.getDay();
console.log(dayNumber);

if (dayNumber === 1) {
    console.log("Everyone hates mondays.");
}
else if (dayNumber === 3) {
    console.log("HUMP DAY");
}
else if (dayNumber === 5) {
    console.log("Aww yeah, friday!");
}
else {
    console.log("It's just another day of the week.");
}

//Parsing Dates

var parsed = Date.parse("June 4, 2015");
document.body.innerHTML = parsed;


//Changing milliseconds to date

var newDate = new Date(parsed);
alert(newDate);

//date to string
var stringed = newdate.toString();

//Get the year
var date4 = new Date();
var getYear = date4.getFullYear();
//output: 2015;
