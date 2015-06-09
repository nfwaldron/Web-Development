//Javascript Prototypes - their purpose is for faster object creation. They are used to add functions or properties to an object without adding them to the constructor.

function person(first, last, age, hairColor) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.hairColor = hairColor;
}

var Me = new person("Cody", "Shipley", 22, "Brown");

//Adding a property to an object
Me.location = "Seattle";

//Adding methods to objects
Me.speak = function () {
    console.log("Hello");
}


//Adding properties to prototype
person.location = "Unknown";

//adding method to prototype - we do this so the function isn't created every time we create an animal

function myAnimal(name,age) {
    this.name = name;
    this.age = age;
}

myAnimal.prototype.setName = function (name) {
    this.name = name;
}

var rex = new myAnimal("rex",12);

// Create Rectangle Object Constructor
function rectangle(length, width)
{
    this.length = length;
    this.width = width;
}

// Create rectangle object
var rectangleA = new rectangle(2.5, 3.5);

// Add method 
rectangleA.calculateArea = function()
{
    return this.length * this.width;
}

// Output the area of the rectangle
// Be sure to call the function as a function, including the ()
 var area = rectangleA.calculateArea();

console.log('The area of this rectangle is '+ area +'.');

