/*Convert your birthday to a date*/

/*Turn your birthday into milliseconds*/

// The Date.parse() method turns a date in the form of Month Day, Year into a millisecond value that the computer can understand
var birthdayMilli = Date.parse("November 28, 1988");
console.log(birthdayMilli);

/*Change milliseconds back into a date.*/

// If you pass a variable that contains the millisecond value of a date as an arguement to the new Date() function, it will return the value as a date in Month Day, Year
var birthdayMilliToDate = new Date(birthdayMilli);
console.log(birthdayMilliToDate);

/*Turn that date into a string.*/

// Use the toString() method
var date = new Date();
var dateToString = date.toString();
console.log(dateToString);

/* Reverse it and display on screen!*/

var dateToStrRev = dateToString.split("").reverse().join("");
document.getElementById("Display").innerHTML = dateToStrRev;


/*
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
var stringed = newDate.toString();

//Get the year
var date4 = new Date();
var getYear = date4.getFullYear();
//output: 2015;
*/