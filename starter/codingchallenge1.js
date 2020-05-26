/* CODING CHALLENGE 1 

Mark and John are trying to compare their body mass indexes.
BMI formula: mass / height**2
mass in kg, height in meter

calculate both BMIs, create a boolean and display whether mark's bmi is higher than john's or not



*/

// BMI formula: mass / height**2
var yourName, theirName;
yourName = prompt("insert your name: ");
theirName = prompt("insert their name: ");

var yourMass, theirMass;
yourMass = prompt("insert your mass/weight in KG: ");
theirMass = prompt("insert their mass/weight in KG: ");

var yourHeight, theirHeight;
yourHeight = prompt("insert your height in meters: ");
theirHeight = prompt("insert their height in meters: ");

var yourBMI = yourMass / (yourHeight**2);
var theirBMI = theirMass / (theirHeight**2);
// start of spaghetti code
var youHave_moreBMI = yourBMI > theirBMI;
var youHave_equalBMI = yourBMI == theirBMI; // equality vs identity
var equalBMI = (yourBMI*2) / (theirBMI*2);
var averageBMI = (yourBMI + theirBMI) / 2;

var youHave_moreBMImsg, youHave_equalBMImsg, youHave_lessBMImsg;
youHave_moreBMImsg = yourName + "'s BMI is higher than " + theirName + "'s.\n" + yourBMI + " vs " + theirBMI;
youHave_equalBMImsg = "both " + yourName + " and " + theirName + " have the same BMI, which is " + equalBMI;
youHave_lessBMImsg = theirName + "'s BMI is higher than " + yourName + "'s\n" +  theirBMI + " vs " + yourBMI + "\n average BMI is " + averageBMI;

/* end of spaghetti code 

condition variables are not needed, if statements can be simply used as it's implied that the the if (condition) has to always be true
message variable names have to be shortened
@TODO optimize this whole thing

*/


if (youHave_moreBMI === true) {

    alert(youHave_moreBMImsg)
} else if (youHave_equalBMI === true) { // we want only it to be true, nothing else that is equal

    alert(youHave_equalBMImsg)


}
else if (youHave_moreBMI === false) {

    alert(youHave_lessBMImsg)


}


console.log("finished")