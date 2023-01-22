console.log("Operators and Expressions in JS:")
let b = 56;
let a = 990;

//Arithmetic Operators
// console.log("a + b =",a+b);
// console.log("a - b =",a-b);
// console.log("a * b =",a*b);
// console.log("a / b =",a/b);
// console.log("a ** b =",a**b);
// console.log("a++ =",a++);
// console.log("a =",a);
// console.log("a--=",a--);
// console.log("++a =",a);
// console.log("a = ",a);

// Assignment Operators
// a+=5;
// console.log("a = ",a);
// a-=5;
// console.log("a = ",a);
// a/=5;
// console.log("a = ",a);
// a*=5;
// console.log("a = ",a);
// a**5;
// console.log("a = ",a);
// a%=5;
// console.log("a = ",a);


//Comparison Operators
// console.log("A == B is",a==b);
// console.log("A != B is",a!=b);

//when the value of identifier is same but there values are different then === gives false while
//== gives true
// console.log("A == B is",a === b);
// console.log("A == B is",a !== b);


//Logical Operators
// console.log(a<b && b==56);
// console.log(a<b || b==56);
// console.log(!false);


//CONDITIONAL EXPRESSIONS

//"prompt" - used to ask a question
//its data type is always string
// let p=prompt("Can you please enter your age:?");

// //Typecasting string to int
// p=Number.parseInt(p);
// console.log(typeof(p));


// //"alert" - used to give a pop up message
// let l=alert("Hello I'm Aniket..");

// if(p<0){
//     alert("The is not a valid age.");
// }
// else if(p<18){
//     alert("YOu can't Drive..")
// }

// else{
//     alert("This is a valid Age. You can Drive.")
// }



//SWITCH CASE
const car = "TATA";
switch (car) {
    case 'Mercedes':
        console.log("Mercedes is Expensive");
        break;
    case 'BMW':
        console.log("BMW is also Expensive")
        break;
    default:
        console.log(`Sorry, we are out of ${car}.`);
}


//Ternary Operator
let age = 45;
console.log("You are", age > 18 ? "Adult" : "Not an Adult");