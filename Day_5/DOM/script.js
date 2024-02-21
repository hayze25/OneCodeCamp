
//Get element by ID
var headingElement = document.getElementById("heading");
console.log(headingElement);

//get elements by class name
var textElements = document.getElementsByClassName("text");
console.log(textElements);

//get element by tag name
var listItems = document.getElementsByTagName("li");

//get elements by query selector
let container = document.querySelector('#container');
console.log(container);

//get elements by parent node

var listParent = document.getElementById("list").parentNode;
console.log(listParent);

//get elements by children mode
var containerChildren = document.getElementById('container').children;
console.log();


//more specific
var containerChildren = document.getElementById('container').childNodes;
console.log();

//how to use with html
headingElement.innerHTML = "Updated Content";
console.log

//modifying text content only for text does not work with tags
var textElements = document.getElementsByClassName("text");
textElements.textContent = "I am a new paragraph";

//Button

const button = document.getElementById("btn");
button.addEventListener("click", handleClick);

function handleClick(event){
        console.log("Button clicked!");
}