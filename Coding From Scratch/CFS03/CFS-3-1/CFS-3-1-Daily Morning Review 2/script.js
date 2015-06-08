//onclick

function name1() {
    console.log("Hi");
}

//onmouseout and onmouseover

function styleMe() {

    document.getElementById("heading").style.color = "red";

}

function getValue() {
    alert("You entered something in the input field");
}

//onchange

function selectCar() {
    var selected = document.getElementById("cars").value;
    document.getElementById("result").innerHTML = "You picked " + selected;
}
