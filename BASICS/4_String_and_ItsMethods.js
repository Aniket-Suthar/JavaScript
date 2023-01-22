/* //BASIC STRING OPERATONS
let name = "Javascript";
console.log(name.length);

//2nd way
let n='Ecmascript';
console.log(n.length);
console.log("\n");


//Important way =  "Template Literals"
let a="Shyam",b="Ram";
let s=`${a} and ${b} are friend`;
console.log(s);
console.log("\n");
*/

/*
String interpolation = `${a} and ${b} are friend` getting value of variables in the print statement
*/


/*//Escape Sequence Characters
let m= 'I\'m Coder';
console.log(m);
console.log(m.length);

//others character = \t ,\r
*/


//VARIOUS STRING METHODS
let name = "Javascript";
let n = "     Language     ";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(0, 5));
console.log(name.slice(3));
console.log(name.replace("script", "Scrpt"));
console.log(n.trim());  //used to remove whitespaces
console.log(name.concat(n));
console.log("\n");


const sen = "HEllo im a CSE student studying in PDEU";
const word = "CE";
console.log(sen.includes(word)); //returns bool value 
console.log(`The word "${word}" ${sen.includes(word) ? 'is' : 'is not'} in sentence`);

//Extraction of amount from a sentence
let s = "THe amount is 1342342";
let amount = Number.parseInt(s.slice("The Amount is".length));
// console.log(amount.trim());
console.log(typeof (amount));



//IMPORTANT NOTE  = STRINGS ARE IMMUTABLE




