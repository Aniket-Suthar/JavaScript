let a = [1, 2, 3, 4, 5, 33, "name", false, null];
console.log(a);
console.log("The length is:", a.length);
console.log(typeof (a));

//ARRAY METHODS
let b = [22, 3434, 22, 24, 23];
let c = b.toString(); //converts array to a string
console.log(c);

let d = b.join(" - ");
console.log(d);

let p = b.pop(); //removes an element from the last
console.log(b);
console.log(p);

b.push(435); //adds a new element at last to the array
console.log(b);

let s = b.shift(); //removes element from beginning
console.log(s, b);

let sh = b.unshift(35);//add element to the beginning of array
console.log(sh, b);

delete b[3]; //removes an element at particular index but the size of array doesn't change
console.log(b);

let e = a.concat(b); //used to merge arrays
console.log(e);

//Sorting array
b.sort(); // it sorts in alphabatically order as it considers each element as a string 
//and this also changes the original array 
console.log(b);

//To sort in ascending order
let compare = (a, b) => {
    return a - b
    //for sorting in descending order
    //return b-a
}
b.sort(compare);
console.log(b);

b.reverse();
console.log(b);

//IMPORTANT
//Slice  v/s  Splice
/*
Splice is used to add elements to a array
It has 3 arguments field :
1 = from where you want to start adding the elements
2 = No.of elements you want to add
3 = the elements which you want to add

it returns deleted values

*/

let del_Val = b.splice(2, 3, 111, 112, 113);
console.log(b);
console.log(del_Val);


/*
Slice is used to get elements upto which you want
arguments contains starting and ending index
elements will be from starting to ending index-1

it returns an array
*/

let sl = b.slice(1, 4);
console.log(sl);


//USAGE OF LOOPS
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

//using for each by passing a function in forEach
/*
Arguments of forEach loop is :

a.forEach((value,index,array) =>{

})
 */

b.forEach(
    (Element) => {
        console.log(Element * Element)
    }
)

//Array.from is used to make an array from any other objects
let w = "JAVASCRIPT";
let ss = Array.from(w);
console.log(ss);


//for of loop
for (let element of b) {
    console.log(element);
}


//for in loop = returns key values always
for (let key in b) {
    console.log(key);
}



//MAP  FILTER AND REDUCE 


//MAPS
/*
has same arguments as forEach = values,index,array
 */
let arr = [234, 233, 33, 3];
let newA = arr.map(
    (val, index, array) => {
        console.log(val, index, array);
        return val * 2;
    }
)

console.log(newA);

/*
Difference between and forEach and Map
1) Map creates new array by performing some operations on each element
2) While forEach is used when we only want to perform operation on existing array
*/


//FILTER METHOD
//used to get an array on specific condition
//but it doesn't change the original array
let a3 = b.filter(
    (val) => {
        return val < 200;
    }
)
console.log(a3);



//REDUCE METHOD
let ar = [1, 2, 3, 4, 5];

let a4=ar.reduce(
    (a1,a2) =>{
        return a1+a2;
    }
)


//2nd method to pass function as argument
const red = (a1, a2) => {
    return a1 + a2;
}

let a5 = ar.reduce(red);

console.log(a5);


