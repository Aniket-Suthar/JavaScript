//FOR LOOPS

//1) FOR loop
/*let sum=0;
let n=prompt("Enter a number to get sum upto that:");
n=Number.parseInt(n);
for(let i=0; i<n; i++)
{
    sum+=i;
}
console.log("The sum is:",sum);
*/


//2) FOR IN loop
/*let obj ={
    aniket:50,
    prayag:56,
    jugal:33
}

for(let a in obj){
    //console.log("Marks of " + a +" Are "+ obj[a]);  //prints key
    
    //second way to print
    console.log(`Marks of ${a} are ${obj[a]}`);
}
*/


//3) FOR OF loop
/*for(let a of "aniket")
{
    console.log(a); //prints the single characters of string "aniket"
}
*/


/*IMPORTANT NOTE - in for loops when let is used then its value is 
valid only in the scope of for loop not outside it
but if we use var then its value is globally usable
*/



//WHILE LOOPS

//1) While loop
/*let a=prompt("ENter any number :");
a=Number.parseInt(a);

let i=0;
while(i<a){
    console.log(i);
    i++;
}
*/


//2) Do While Loop
/*let a=prompt("ENter any number :");
a=Number.parseInt(a);

let i=0;
do{
    console.log(i);
    i++;
}while(i<n)
*/


//FUNCTIONS IN JS (old way)
function avg(x, y) {
    console.log("Completed");
    return (x + y) / 2;
}
let a = 78, b = 33;
console.log("Avg is:", avg(a, b));



//2nd way to define a function in JS
//Arrow Funtion is mostly preferred
const sum = (a, b) => {
    return a + b;
}
console.log("SUm is:", sum(a, b));
