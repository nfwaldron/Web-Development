/*Use Math.round to round a number of your choice*/

var largeNumber = 3453.2341;
var roundLargeNumber = Math.round(largeNumber);
console.log(roundLargeNumber);

/* Use Math.floor and Math.ciel with numbers of your choice.*/
var number1 = 3.478;
var numberCeil = Math.ceil(number1);
console.log(numberCeil);

var number2 = 5.9012;
var numberFloor = Math.floor(number2);
console.log(numberFloor);

/*3. Convert a number to a string!*/
var number3 = 7.356;
var numberToString = number3.toString();
console.log(numberToString);

/*Using Math.random() try making a rock paper scissors game! Take a look at my example for help! Hint: 3 outcomes, so you won't be using just if and an else! Display the winner on screen.*/

do {

    var userChoice = prompt("Welcome to the game! Please enter  'rock', 'paper' or 'scissors'!");

    userChoice = userChoice.toLowerCase();

}

while (userChoice !== "paper" && userChoice !== "rock" && userChoice !== "scissors");



var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
console.log("Computer: " + computerChoice);



var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors wins";
        }
    }

}


compare(userChoice, computerChoice);

/*
//Number() - Returns a number, converted from it's argument.

var num = "16";
var convert = Number(num);
console.log(typeof convert);

//toString() -Returns a number as a string.

var number = 25;
var numStr = number.toString(); //output: "25"

//Math Object - Allows math tasks on numbers!

//Math.random() - Returns a random number!


var rand = Math.random() * 2;
console.log(rand);


if (rand > 0.5) {
    console.log("You win!")
}
else {
    console.log("You lose.")
}

//Math.round() - rounds an integer to the nearest number.

var largeNum = 234243.423563
var round = Math.round(largeNum);
console.log(round);

//Random output in array.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                                            
var randomOutput = numbers[Math.round(Math.random() * numbers.length)];
console.log(randomOutput);

//Math.floor() - Rounds an integer down to the closest number.
var num5 = 5.99999999999999999999999999999999999;
var floor = Math.floor(num5); //Output: 5

//Math.ceil(); - Rounds an integer up to the nearest number.
var num6 = 0.00000000000000000000000000000001;
var ceil = Math.ceil(num6) //Output: 1

//Math.PI returns PI
*/