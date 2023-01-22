//  /*
//  DOM tree refers to the HTML pge where all the nodeS are objects.
//  There can be 3 main types of nodes in DOM tree:
//  1. Text 2.Element  3.COmmment

//  THe html page <html> is at the root and <head> and <body> are its children etc.

//  A text node is always a leaf of tree


//  AUTO-CORRECTION
//  The erroneous HTML is encountered and Auto corrected by Browser


//  */

//  //GETTING VARIOUS ELEMENTS OF HTML

//  //to get the head
//  document.head

//  //to get the whole html body
//  document.documentElement

//  //to change title
//  document.title=Aniket

//  //document.title always return a string while others return objects


//  //ACCESSING CHILDREN ELEMENTS

//  /*
// Children of an element = Direct as well as deeply nested elements of an element 

// Child nodes = elements that are direct children
//               ex - head and body are direct child of html

// Descendant nodes = all nested elements,child 
//  */


// //Accessing first ,last and child nodes
// console.log(document.body.firstChild);  //it is a text 


// console.log(document.body.lastChild);

// console.log(document.body.childNodes);

// console.log(document.body.hasChildNodes);



// //Properties of DOM collection
// /*
// They are read only
// They are live i.e will automatically update if childnodes of element is changed
// They are iterable using for...of loops

// <body> is said to be the "next" or "right" sibling of head
// head is said to be the "previous" or "left" sibling of body
 
// */
// $0.nextSibling;
// $0.parentnode;


//Accessing various collections of DOM
// a=document.body.firstChild;

// console.log(a);

// console.log(a.parentNode);

// console.log(a.parentElement);

// console.log(a.firstChild.nextSibling);

//Diff bet parentNode and parentELement
/*
parentNode return something only when it is node
parentElement return only return a valid element otherwise null

*/
 

//ELEMENTS ONLY NAVIGATION
// let b= document.body;
// //here any kind of node can be returned i.e it can be text ,comment ,or element node
// console.log("First child of b is",b.firstChild);

// //here only the element node is returned
// console.log("First element of b is",b.firstElementChild);

// // other methods
// console.log(b.nextElementSibling);
// console.log(b.previousElementSibling);
// console.log(b.lastElementChild);


//Styling the elements using the DOM the collections
const changeBg = () => {
   document.body.firstElementChild.style.background= "green" 
}