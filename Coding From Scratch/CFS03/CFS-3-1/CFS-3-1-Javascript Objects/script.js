/* Assignment: Using an object constructor, I want you to take a look at one item close to you and build a construcor based off of it. Think of the properties it is made up of when creating this function. Once you've completed that, I want you to create 3 new objects using that constructor. */



// Bass object
function bass(manufacturer, strings, pickups)
{
    this.manufacturer = manufacturer;
    this.strings = strings;
    this.pickups = pickups;
}

var myBass = new bass("LeFay", "Five", "Bartolini");

console.log(myBass.manufacturer);

/*
var myCar = "Ford";

var myCar2 = {
    name: "Ford Mustang",
    owner: "Rick",
    color: "Green",
    model: 2009
};

//Object Method - function built on an object

var myCar3 = {
    name: "Ford Mustang",
    owner: "Rick",
    color: "Green",
    model: 2009,
    honk: function () {
        alert("Honk honk!");
    }
}


//console.log(myCar3.owner + "was driving down the road and someone pulled out in front of him, his car made a noise!" + myCar3.honk())


//Object Literal Notation - Easiest way to create a single object.

var cat = {
    color: "orange",
    age: 8,
    name: "Fluffy"
};


//Using Javascripts "new" keyword
//var person = {};
var person2 = new Object();
person2.name = "Cody";
person2.age = 22;
person2.gender = "Male";

//Object Constructor
function person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

}

var cody = new person("Cody", 22, "Male");
var susan = new person("Susan", 45, "Female");

//"this" keyword

//In JS, the keyword called "This" is the object that owns the javascript code. 
//Value of this, when used in a function, is the object that "owns" the function
// Value of this, when used in an object, is the object itself.
//This keyword in an object constructor does not have a value, instead it gets a value from the parameters of the function. (Which is why we set it equal to a parameter)


//Objects are never permanant

var randomPerson = { name: "John", age: 25, hairColor: "brown" };
randomPerson.hairColor = "blue";

console.log(randomPerson.hairColor)


//Objects are Mutable - Addressed by reference, not value.

var x = randomPerson;
x.name = "Cody";
*/