/*Assignment:

1. Use indexOf to find the position of "Car" in "Dude, where is my car?"
2. Use slice on the following three variables, next to the variables are the words I want sliced out.

A. Sunflower : Cut out Sun
B. Coder Camps : Cut out Camps
C. Microsoft : Cut out crosoft

3. Use the replace method to replace a word in a string with another word.

4. Create an if statement that uses either toUpperCase or toLowerCase

5. Reverse a string!
*/
 


var string1 = "Dude, where is my car?";
var locate = string1.indexOf("car");
console.log(locate);

var string2 = "Sunflower";
var slice = string2.slice(0,3);
console.log(slice);

var string3 = "Coder Camps";
var slice1 = string3.slice(6,11);
console.log(slice1);

var string4 = "Microsoft"
var slice2 = string4.slice(2,10);
console.log(slice2);

var string5 = "Think like a programmer!";
var replace = string5.replace("programmer","musician");
console.log(replace);

var result = prompt("Are you enjoying Code Camps? Please enter 'Yes' or 'No'");

result = result.toUpperCase();

if (result==="YES")
{
    alert("Awesome, lets do more work!!!");
}

else
{
    alert( "You said " + result +"!" + " Aw man, what you need...is more practice!");
}
       
var string6 = " They say that if you reverse RACECAR it still spells RACECAR!";

string6 = string6.split("").reverse().join("");

console.log(string6);
