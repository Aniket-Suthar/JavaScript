console.log("First JAvascript Program");
let a=99;  //declaring variable
//var a=99;
console.log(a);
a="aniket";
console.log(a);


//"VAR V/S CONST V/S LET"
// var is globally scoped while let and const are blocked scoped
// var can be updated and re-declared in its scoped
// let can be updated but not re-declared
// const can't be updated and re-declared
// (const used when identifier is not going to change in future)
// var is initialized with "undefined" while let and const are not initialized

//PRIMITIVE DATA TYPES       NON-PRIMITIVE DATA TYPE
// N - null                  Objects
// N - number
// S - symbol
// S - string
// B - boolean
// B - BigInt
// U - undefined
let b=null;
let c=345;
let d=true;
let e=BigInt("3424");
let f="HArry";
let g= Symbol("I am a beginner");
let h =undefined;

console.log(b,c,d,e,f,g,h);

//getting type of data type
console.log(typeof d);


//Objects (NON PRIMITIVE DATA TYPES)
const item ={
    "ANiket":true,
    "Prayag":false,
    "Jugal":69,
    "Darshan":undefined
}
console.log(item["ANiket"]);

item["Name"]="Vaidik";
console.log(item);