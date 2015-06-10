var garage=[];

function car(make, year, image)
{
	this.make = make;
	this.year = year;
	this.image = image;
}

function addCar(){
	var make = document.getElementById('carMake').value;
	var year = document.getElementById('carYear').value;
	var image = document.getElementById('carImg').value;
	var carObj = new car(make,year,image);
	garage.push(carObj);
	console.log(garage);
}