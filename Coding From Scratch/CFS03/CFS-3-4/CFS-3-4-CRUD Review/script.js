//Array that is holding every car that we create.
var garage = [];
//Id that will be placed on every car that is created, each time a car is created, the id increases by one, so that we never have identical id's
var newId = 0;
//Currently selected car
var selectedCarId;

//Constructor Function that is going to make up the properties of a car
function car(make, year, image) {
    this.id;
    this.make = make;
    this.year = year;
    this.image = image;
};


//Our way of creating a car, it takes the users input and then plugs it into a new carObj and the assigns the carObject id to a new id. Then we push our car to the garage array, and run the show cars function.
function addCar() {
    var make = document.getElementById("carMake").value;
    var year = document.getElementById("carYear").value;
    var image = document.getElementById("carImg").value;
    var carObj = new car(make, year, image);
    carObj.id = newId;
    newId++;
    garage.push(carObj);
    console.log(garage);
    showCars();
};

//This function is used to take our old values from a car that we choose, and plug those values into the input so that we can either correct the car's text, or change the text completely.
function editCar(id) {
    //This for loop is running through our array called garage.
    for (var car in garage) {
        //If the button id is equal to the car id, then we want to set the value of our inputs to the value of that specific car.
        if (garage[car].id == id) {
            document.getElementById("editMake").value = garage[car].make;
            document.getElementById("editYear").value = garage[car].year;
            document.getElementById("editImg").value = garage[car].image;
            selectedCarId = id;
        }
    }
}

//saveCar function allows us to save the car values that we recently changed. 
function saveCar() {
    for (var car in garage) {
        if (garage[car].id == selectedCarId) {
            garage[car].make = document.getElementById("editMake").value;
            garage[car].year = document.getElementById("editYear").value;
            garage[car].image = document.getElementById("editImg").value;
        }
    }
    showCars();
}


//deleteCar will delete a car on button click, each button is associated with a different car, and each have id's so that we are deleting the exact car we want.
function deleteCar(id) {
    var index;

    for (var i = 0; i < garage.length; i++) {

        if (garage[i].id == id) {
            index = i;
            break;
        }
    }
    garage.splice(index, 1);

    showCars();
}
//  [ car0, car1, car2, car3, car4 ]
// [ { id = 0, make = "honda", year = 2001, image = ""}, { id = 1 make = "bmw", year = 2013, image = ""}, { id = 2, make = "VW", year = 1989, image = ""} ]

//showCars is going to display all of the cars from our garage array. It will also assign the delete and edit buttons to every car, and each button is assigned an id to keep track of that specific car.
function showCars() {
    document.getElementById("carDisplay").innerHTML = "";
    //Holder 
    var h = "";
    for (var car in garage) {
        h += "<h1>" + garage[car].make + "</h1>"
        + "<p>" + garage[car].year + "</p>"
        + "<img width='250' src='" + garage[car].image + "' /><br />"
        + "<button onclick='editCar(" + garage[car].id + ")'>Edit</button>"
        + "<button onclick='deleteCar(" + garage[car].id + ")'>Delete</button>";
        //<button onclick="deleteCar(some id)">Delete</button>
    }
    document.getElementById("carDisplay").innerHTML = h;

    document.getElementById("carMake").value = "";
    document.getElementById("carYear").value = "";
    document.getElementById("carImg").value = "";
};
