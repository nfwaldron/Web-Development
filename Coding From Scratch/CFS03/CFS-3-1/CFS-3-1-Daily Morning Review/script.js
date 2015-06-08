// Function to display the date in an HTML element

// function keyword, function name
function displayDate()
{
    // create a variable to store the Date() object
    var today = new Date();
    
    // store the output in the HTML element with the id of "result"
    document.getElementById("result").innerHTML = today;    
}

//Create a function that loops your name in the console log five times

function loopName()
{
	for (var i = 0; i < 5; i++) 
	{
		console.log("Nathan ");
	};
}

console.log(loopName());

// Use two inputs, get the values, and use the values to make decisions using 'if' statements

function displayMessage()
{
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    
    // Ensure that the character entered for gender is uppercase
    gender = gender.toUpperCase();
    
    if (gender==='M' && age > 18)
    {
        document.getElementById("container2").innerHTML = "Hooray!";
    }
    
    else if (gender==='F' && age > 18)
    {
        document.getElementById("container2").innerHTML = "Let's Go Girl!";
    }
    
    else if (gender==='M' || gender === 'F' && age < 18)
    {
        document.getElementById("container2").innerHTML = "You're not older than 18!"
    }
    
}