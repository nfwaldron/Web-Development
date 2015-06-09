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

animal.prototype.setName = function (name) {
    this.name = name;
}


var rex = new myAnimal("rex",12);