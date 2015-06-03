var name;
name = prompt("What is your name");

if( name != typeof String){
    console.log("You must enter a name");
}

else if (name != "Nathan")
{
    console.log("That is the wrong name");
}

else {
    document.getElementById("header").innerHTML = "name";
}
