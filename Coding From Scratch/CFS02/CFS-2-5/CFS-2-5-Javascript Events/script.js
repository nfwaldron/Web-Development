//Javascript Events


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
