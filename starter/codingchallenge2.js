/** 
 * JOHN and MIKE both play basketball in different teams. In the latest 3 games,
 * John's team scored 89, 120 and 103, Mike's scored 116, 94 and 123.
 * 
 * 
 * 
 * Make an average of teams (also define team names) with infinite amounts of numbers inputtable per each. 
 * Calculate the average between both and define which wins, then average both teams.
*/


var team1 = prompt("insert first team name: ");
var team2 = prompt("insert second team name: ");

var team1num = prompt(team1 + " |\ninsert your scores\nwhen finished, input nothing and click OK: ");
// var team2num = prompt("TEAM 2 |\n insert your scores\nwhen finished, input nothing and click OK: ")
// var isTeam1Num = team1num !== team1num // if false is NaN // edit: not needed

var team1summedNum, team2summedNum;

while (isNaN(team1num) === false) {
    
    team1Original
    team1summedNum++;
    console.log("(team 2) current value: " + team2num);
    var team1num = prompt(team1 + " | " + team1num + " |\n insert your scores\nwhen finished, input 'done' and click OK: ");
    team1num++;

} //                                                                                          V I could have used parseInt to check whether it was actual none input, but since I started with isNaN I might aswell not get ahead of myself.

if (isNaN(team1num) === false) {

    alert("you have either entered something which is not a number, you either mistakenly did this, or wanted to go ahead with team 2.\ncontinue for team 2.\nTEAM 1: " + team1num);
    console.log("else if team2num triggered");

}



/* do { // @TODO don't know what to do so i tried do while, will finish tomorrow, this doesn't work, it stops at the first prompt input and then stops the whole script

    team1num++;
    team1summedNum++;
    console.log("current value: " + team1num);

} while (isNaN(team1num) === false);

if (isNaN(team1num) === false) {

    alert("you have either entered something which is not a number, you either mistakenly did this, or wanted to go ahead with team 2.\ncontinue for team 2.\nTEAM 1: " + team1num);
    console.log("else if team1num triggered");

    ---
    edit: i found out this was totally unneeded and that I had to var prompt again within while statement
} */


var team2num = prompt(team2 + " |\ninsert your scores\nwhen finished, input 'done' and click OK: ");

while (isNaN(team2num) === false) {

    team2summedNum++;
    console.log("(team 2) current value: " + team2num);
    var team2num = prompt(team2 + " | " + team2num + " |\n insert your scores\nwhen finished, input 'done' and click OK: ");
    team2num++;


} 

if (isNaN(team2num) === false) {

    alert("you have either entered something which is not a number, you either mistakenly did this, or wanted to go ahead with team 2.\ncontinue for team 2.\nTEAM 2: " + team2num);
    console.log("else if team2num triggered");

}

var team1avg = team1num / team1summedNum;
var team2avg = team2num / team2summedNum;
var bothTeamsAvg = (team1avg + team2avg) / 2

if (team1avg > team2avg) {

    alert(team1 + "scored the most points\n" + team1 + ": " + team1avg + "\n" + team2 + ": " + team2avg);
    console.log("team 1 won");

} 

else if (team1avg < team2avg) {

    alert(team2 + "scored the most points\n" + team2 + ": " + team2avg + "\n" + team1 + ": " + team1avg);
    console.log("team 2 won");

}

console.log("end of script");


/*

use this next commit:

var team1 = prompt("insert first team name: ");
let team1Total = 0;
let team1num;
do {
  team1num = prompt(team1 + " |\ninsert your scores\nwhen finished, input nothing and click OK: ");
  const val = Number.parseInt(team1num, 10);
  if (!Number.isNaN(val)) {
    team1Total += val;
  }
} while (team1num);

thanks to hadria@programming discussions discord server


*/

// let is for code blocks, var for funcs