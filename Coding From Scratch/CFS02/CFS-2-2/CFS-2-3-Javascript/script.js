/*Arrays - Are used to store multiple values in a single variable.
Arrays are 0 index based, meaning the first item starts as number 0.


//Accessing an element in our array by its index number!
var cody = myClass[0];
var jason = myClass[2];
var nathan = myClass[5];

//Changing an array element by its index number

myClass[0] = "Logan";

var randomItems = [cody, jason, nathan, 123, true, false, Date()];

//console.log(randomItems.length);


//POP - Removes the last element from the array.

var numbers = [1, 2, 3, 4, 5];

console.log("We have deleted number " + numbers.pop());

//PUSH - Add an element to the end of our array.

numbers.push(6, 7, 8);

console.log(numbers);
*/


/*//Example with If Statement

var myClass = ["Cody", "Imran", "Jason", "Jeremy", "Lindsey", "Nathan"];
var classSize = Number(prompt("What's the max number of students in your class?"));


if (myClass.length > classSize) {
    console.log("The class was too large, so we had to remove " + myClass.pop());
}
else if (myClass.length < classSize) {
    var newStudent = prompt("What is the new students name?");
    console.log("The class was so small, that we added the following student: " + myClass.push(newStudent   ));
}
else {
    console.log("This is a perfect class size!");
}*/


// Example with pop, push, shift, unshift
var numbers = [1,2,3,4,5,6,7,8,9];
console.log("This is your starting array [" + numbers + "]");
var age = prompt("Please enter your age:");
var myGender = prompt("Please enter your gender. 'M' or 'F':")

if (age > 18 && myGender === 'M')
{
    console.log("Numbers will be added to the array:");
    numbers.push(10,11,12,13);
    console.log("New array = " + numbers);
}

else if(age < 10 && myGender === 'M')
{
    console.log("Numbers will be removed from the array:");
    //You can only have .pop() with nothing in parentheses, and it will remove last item.
    numbers.pop();
    console.log("New array = " + numbers);
}

else if ( age > 18 && myGender === 'F')
{
    console.log("The first number will be removed from the array:");
    // Shift removes the first element from the array
    numbers.shift();
    console.log("New array = " + numbers);
}

else ( age < 10 && myGender === 'F')
{
    console.log("The first number will be removed from the array:");
    // Unshift adds elements to the beggining of the array...functions like push()
    numbers.unshift(10,13,14);
    console.log("New array = " + numbers);
}