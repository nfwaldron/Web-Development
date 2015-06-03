/*
Assignment: Create 3 for loops they should do the following.

1. Write your name to an div in HTML 10 times
2. Count from 15 to 100 and display in console.
3. count from 1000 to 400 and list in another div

Stretch Goal: Make the loop count by 5's on the 3rd loop you're creating. 

Hint: the third statement will look very similar to 

 i += number; */

 for (var i = 0; i < 10; i++) 
 {
 	// The += is to ensure that the HTML element that is
    // receiving the input from javascript continually
    // displays the added text.
     document.getElementById("loop").innerHTML += "Nathan ";
 };

for (var j=15; j <= 100; j++) // <= because you want to include 100 in the output
{
     console.log(j);   
}


for (var k = 1000; k >= 400; k--)
{
     document.getElementById("count").innerHTML += k+" ";  
}