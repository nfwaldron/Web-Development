function displayArray()
{
    // Declare an array of 10 numbers
    var numArray = [1,2,3,4,5,6,7,8,9,10];
    
    // For loop to loop through elements of the array 
    for(var i = 0; i < numArray.length; i++)
        {
            // Display the elements in the array in the HTML element with the identifier "array". The variable i serves as both a counter, and an index of the element in the array you want to be displayed
            document.getElementById("array").innerHTML += numArray[i] + " ";
        }
}


/*//Javascript Events


//onclick - The user clicks some HTML event, and something happens.


function sayHi(msg) {
    document.getElementById("result").innerHTML = msg;
}

//onmouseout and onmouseover

function mouseOver() {
    document.getElementById('pic1').src = "http://upload.wikimedia.org/wikipedia/commons/c/c4/Lleyn_sheep.jpg";
}

function mouseOut() {
    document.getElementById('pic1').src = "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg";
}


//onchange

function displayFavorite() {
    var x = document.getElementById('mySelect').value;
    document.getElementById('result').innerHTML = "All I want in life is " + x;
}
*/