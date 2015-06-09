/*Assignment: I want you to build another object constructor, 
 *this time I want it to be on candy. It needs 3 properties and a method. 
 *The properies aren't important, but I want the method to display the candy information. 
 *Also, create an object using the object literal notation, and use a for in loop to display 
 *the objects values. 
 * 'for in' loop example: http://www.w3schools.com/js/js_loop_for.asp
 */


// Object Constructor Method

function candy(name, calories, type)
{
    this.name=name;
    this.calories=calories;
    this.type=type;
    this.displayInfo=function()
    {
        console.log("The candy is named "+name+" and has "+calories+" and is a type "+type+".");   
    }
}

var myCandy = new candy("Kit-Kat",2500,"Chocolate");
myCandy.displayInfo();


//Object Literal Method

var myGum = {
    name: "Juicy Fruit",
    calories: 2400,
    flavor: "Strawberry",    
}


// Use of for in loop to display all properties of an object
var x;

for (x in myGum)
{
    console.log (myGum[x] + "");
}

/* It turns out we can make a method work for many objects using a new keyword, this. 
 * The keyword this acts as a placeholder, and will refer to whichever object called that 
 * method when the method is actually used. Let's look at the method setAge (line 2) to see how 
 * this works. By using the keyword this, setAge will change the age property of any object that calls it. 
 * Previously, we had a specific object bob instead of the keyword this. But that limited the use of the 
 * method to just bob. Then when we say bob.setAge = setAge; (line 9), it means whenever we type 
 * bob.setAge( ), this.age in the setAge method will refer to bob.age.
 */


// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;

// Create Square Object that can calculate the area and perimeter

var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function () {
    return this.sideLength * this.sideLength;
}
    

var p = square.calcPerimeter(3);
var a = square.calcArea(2);
  




/*
//Methods - Any function on an object

var person1 = {
    name: "Cody",
    age: 22,
    location:"Redmond, Washington",
    speak: function(msg){
        document.getElementById("result").innerHTML += person1.name + " says: " +  msg + "<br>";
    }
}

person1.speak("Hello!");
person1.speak("How are you?");
person1.speak("Great!");

function person(fName, lName, age, hairColor) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.hairColor = hairColor;
    this.changeName = function () {
        var x = document.getElementById("last").value;
        this.lName = x;
        console.log(fName + " " + x + " name has been changed.");
    }
}

var Logan = new person("Logan", "Smith", 15, "brown");
*/

