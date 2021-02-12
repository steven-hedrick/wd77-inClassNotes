/* BRONZE

Write two variables. One will store your name and another will store a friend's name. 
Find out what property you can use to check how long the names are. 
Console log how many letters are in each name.

*/

var myName = "Steven";
var friendName = "Chyna";

console.log(myName.length);
console.log(friendName.length);

console.log(myName.length, friendName.length);


/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. 
Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/

if(myName > friendName) {
    console.log("Steven has the longer name!")
} else {
    console.log("Chyna's name is longer!")
}


/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

let myName = 'Steven';
let friendName = 'Chyna';

let x = myName.length;
let y = friendName.length;
let c = x - y;
let q = y - x;

if(x > y) {
    console.log(`${myName} is longer by ${c}.`);
} else if (y > x) {
    console.log(`${friendName} is longer by ${q}.`);
} else {
    console.log('The names are the same length')
}
