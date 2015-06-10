var garage=[];

// create a variable to store ID
var newId = 0;

function car(make, year, image)
{
	this.id;
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

	// assign the value of the number variable newId to the 
	carObj.id = newId;
	newId++;

	garage.push(carObj);
	console.log(garage);

	// for the post to be displayed, you MUST include the showCar() function in the addCar() function!
	showCar();
}

function editCar(id)
{
	for (var car in garage)
	{
		if (garage[car].id === id)
		{	
			document.getElementById("editMake").value=garage[car].make;
			document.getElementById("editYear").value=garage[car].year;
			document.getElementById("editImg").value=garage[car].image;
		}
	}

}

function saveCar(id)
{
	for (var car in garage)
	{		
		if (garage[car].id === id)
	{	
		garage[car].make = document.getElementById("editMake").value;
		garage[car].year = document.getElementById("editYear").value;
		garage[car].image = document.getElementById("editImg").value;
	}

	}

	showCar();

}

function showCar()
{
	document.getElementById('carDisplay').innerHTML = "";

	for(var car in garage)
	{
		document.getElementById('carDisplay').innerHTML += "<h1>" + garage[car].make 
		+ "</h1><p>" + garage[car].year + "</p> <img  width = '250' src ='" + 
		garage[car].image + "'/><br>" + 
		 "<button onclick='editCar(" + garage[car].id + ")'>Edit</button>"
		 + "<button onclick='saveCar( " + garage[car].id + ")'>Save</button>" ;
	}

document.getElementById("carMake").value = "";
document.getElementById("carYear").value = "";
document.getElementById("carImg").value = "";
}