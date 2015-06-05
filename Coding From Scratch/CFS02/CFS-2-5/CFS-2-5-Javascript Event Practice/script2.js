//Getting the value of an input


function showName() {
    var name = document.getElementById("name").value;
    document.getElementById("result").innerHTML = name;
}


function addNumbers() {

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = document.getElementById("result").innerHTML = Number(num1) + Number(num2);
    return sum;

}

function checkName() {
    var name = document.getElementById("name").value;

    if (name === "Cody") {
        document.getElementById("result").innerHTML = "You're the instructor of this class.";
    }
    else if (name === "") {
        document.getElementById("result").innerHTML = "You must enter something into the input box.";
    }
    else {
        document.getElementById("result").innerHTML = "Hello " + name;

    }

}

//DOM - Document Object Model

//Finding Elements
 //By class
var x = document.getElementsByClassName("food");
//by tag
var y = document.getElementsByTagName("p");
//find by css selector
var z = document.querySelectorAll("h1.notfood");



//Style

document.getElementById("heading").style.color = "red";