var garage=[];

function car(make, year, image)
{
	this.make = make;
	this.year = year;
	this.image = image;
}

//Create

function addCar(){
	var make = document.getElementById('carMake').value;
	var year = document.getElementById('carYear').value;
	var image = document.getElementById('carImg').value;
	var carObj = new car(make,year,image);
	garage.push(carObj);
	console.log(garage);

	// for the post to be displayed, you MUST include the showCar() function in the addCar() function!
	showCar();
}

// Read

function showCar(){
	document.getElementById('carDisplay').innerHTML = "";
	for(var car in garage){
		document.getElementById('carDisplay').innerHTML += "<h1>" + garage[car].make + "</h1><p>" + garage[car].year + "</p> <img  width = '295' src ='" + garage[car].image + "'/><br>";
	}

}