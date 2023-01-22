/*
// console.log("Hello im aniket");

//CONSOLE METHOD
console.log("Hello");
console.error("This is an error");
console.assert(66>3);
console.clear();  //used to clear console

//CONSOLE.TABLE
obj={
    A:12,
    B:23,
    C:342,
    D:33
}
console.table(obj); // used to create key-value pair tab;e
console.warn("Here is a warning");
console.info("This is a info");


//CONSOLE.TIME
console.time("Process 1"); //Starting of time
console.timeEnd("Process 1"); //getting ending time 
*/


//PROMPT ALERT AND CONFIRM METHOD
alert("Kya chal Raha he Comders...")

let a = prompt("Enter your name here:");
alert("Hello Comder : " + a);

let c = prompt("ENter your age:", "18");
//2nd argument in prompt is used for default value
alert("Your age is:" + c);

let d = confirm("Are you sure?");
//In confirm if we click on YES it return bool value true and false otherwise
if (d) {
    document.write("You entered your Correct age ")
}
else {
    document.write("Please enter your correct age not the defaulted:")
}