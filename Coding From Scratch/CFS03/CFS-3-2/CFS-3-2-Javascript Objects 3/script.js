// Use 2 inputs, and an if statement to store the values, and make decisions based on the input
function validate() {
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    // ensure that age is made lowercase
    gender = gender.toLowerCase();

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    if (age > 18 && gender === "male") {
        document.getElementById("image").innerHTML = "<img src='http://40.media.tumblr.com/f0198e80fcc9545f9eadcefaf93dc0dc/tumblr_n3bcytY5Yw1r9t0eso1_500.jpg'>";
    } else if (age > 18 && gender === "female") {
        document.getElementById("image").innerHTML = "<img src='http://media.ifccenter.com/images/films/the-black-panthers_592x299.jpg'>";
    } else if (gender === "male" || gender === "female" && age < 18) {
        document.getElementById("image").innerHTML = "<p>" + firstName + "" + lastName + "" + "you must be older than 18 to enter this website </p>";
    }

}

// Use the object literal notation to create an object based off of an animal.

var animal = {
    gender: "male",
    species: "cat",
    age: 12

};

// Create a person constructer that contains a method that allows you to change the location based upon user input.
function person(name, age, gender, location) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.location = location;

    // Create the relocate function. Assign the function to the 'variable' this.location, so that it is accessable 
    // by every instance of the class.
    this.relocate = function () {

    	// Create a local variable, and assign its value to the value entered into an input box.
        var newLocation = document.getElementById("location").value;

        // Update the value of this.location
        this.location = newLocation;
    };
}

var Nathan = new person("Nathan Waldron", 27, "male", "Rhode Island");
var Cody = new person("Cody Shipley", 25, "male", "Washington");
var Jamilyah = new person("Jamilyah Richardson", 27, "female", "Boston");