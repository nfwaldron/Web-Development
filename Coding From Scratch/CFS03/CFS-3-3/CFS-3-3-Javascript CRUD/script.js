var garage = [];
var newId = 0;
var selectedCarId;


function car(make, year, image) {
    this.id;
    this.make = make;
    this.year = year;
    this.image = image;
};

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


function editCar(id) {
    for(var car in garage)
    {
        if (garage[car].id == id) {
            document.getElementById("editMake").value = garage[car].make;
            document.getElementById("editYear").value = garage[car].year;
            document.getElementById("editImg").value = garage[car].image;
            selectedCarId = id;
        }
    }
}

function saveCar() {
    for(var car in garage)
    {
        if (garage[car].id == selectedCarId) {
            garage[car].make = document.getElementById("editMake").value;
            garage[car].year = document.getElementById("editYear").value;
            garage[car].image = document.getElementById("editImg").value;
        }
    }
    showCars();
}

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
function showCars() {
    document.getElementById("carDisplay").innerHTML = "";
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

