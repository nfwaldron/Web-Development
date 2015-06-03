//String Methods - Tools in javascript that are going to help us work with strings.

//indexOf - returns the index of the first occurance of a specified text.

//If a negative 1 is returned, the string you are looking for does not exist.

var str = "Where is the word 'bear' located in this sentence?";
var locate = str.indexOf("asoihgiahgpawh");
//alert(locate);

//Search() - search a string for a specified value and returns the position of the match.

var str2 = " hello, are how are you are doing?";
var find = str2.search("are");
//alert(find);


//indexOf and search are the exact same thing. Search is considered to be used more because it can handle powerful search values.

//slice - extract a part of string and returns the extacted part into a new string. Can take negative values to go backwards through the string. 

var word = "Hamburger";
var result = word.slice(0, 3);
console.log(result) //"Ham"

//Substring - Works like slicing, except cant take negative values.

var word2 = "Hamburger";
var result2 = word2.substring(0, 3);
console.log(result2) //"Ham"


//Replace String Content - You choose a part of a string, and replace it with another.

var str3 = "I work at Microsoft.";
var replace = str3.replace("Microsoft", "Coder Camps");
console.log(replace);

// uppercase and lowercase methods

var text = "HEY THERE HOW ARE YOU!";
var lower = text.toLowerCase();
console.log(lower);

var text2 = "HEY THERE HOW ARE YOU!";
var upper = text2.toUpperCase();
console.log(upper);

var question = prompt("Do you like programming?");
var lower = question.toLowerCase();

if (lower == "yes") {
    console.log("Hi!");
}
else {
    console.log("Why not?");
}

//How to reverse a string.


//Coverting a string into an array
//Split Method - It allows us to chop up a string into individual letters and store into an array.

var myName = "Cody Shipley";
var nameArray = myName.split("");
console.log(nameArray);

//Reverse Method - takes an array and reverses the value order.
var reversed = nameArray.reverse();

//Join method - Take an array, and convert into a string, based on the seperator provided
var joined = reversed.join("");
console.log(joined);


//Short way of reversing a string
var str5 = "This is the string that I want reversed.";
var result2 = str5.split("").reverse().join("");
console.log(result2);