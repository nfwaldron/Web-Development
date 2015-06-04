/* Create an if statement that has three else if statements, and that uses .toLowerCase()  */

var result = prompt("Are you enjoying the East Coast vibe? Please enter: 'Yes','No','Maybe', or 'Naw'");

result = result.toLowerCase();

if(result==='yes')
{
    alert("Yea man! That's awesome! We have some of the greatest universities, venues, and people!");
}

else if(result==='no')
{
    alert("Well, I hope that you come to love this side of the USA!");
}

else if (result==='maybe')
{
    alert("You gotta make up your mind!");
}

else if (result==='naw')
{
    alert("'Naw'? Did you really type that? You need to make better grammatical choices bro.");
}

else
{
    alert("You didn't enter a valid answer.");
}


/* Reverse a string */

var string = "This is the way I drive my RACECAR!";
// The split.() method splits a string and returns a new array.
var stringRev = string.split("").reverse().join("");
console.log(stringRev);

/* Repeat the name of the city you live in 10 times*/

for(i=0; i < 10; i++)
    {
        console.log("Boston");
    }
/* Create a while loop that loops from 500 to 25*/

var counter = 500;

while(counter >= 25)
{
    console.log(counter);
    counter --;
}

/* Use a for loop to loop through an array, and display it on the page*/

var text = "Repeat!";
for(i=0; i< 10; i++)
{
      document.getElementById("loop").innerHTML += text + " ";  
}
