// Accessing the document
console.log(document.title)

// finding an element by id
const infoPara = document.getElementById("info")
console.log(infoPara)
console.dir(infoPara) // if the .log does not show the element properties use .dir

console.log(infoPara.textContent)

// adding text to the existing content using +=
infoPara.textContent += " Abhay"
// finding elements using CSS selectors
let container = document.querySelector(".container")
console.log(container)
// using the style property and setting CSS styles
container.style.maxWidth = "800px"
container.style.margin = "0 auto"

// finding all elements using CSS selectors
let allNodes = document.querySelectorAll(".type")
console.log(allNodes)

allNodes[0].style.background = "cyan"
// looping through an array and accessing each item individually inside the loop
for (let eachNode of allNodes) {
  eachNode.style.border = "1px solid black"
}

/* Traversing the DOM */
// find element by id
const mainNodes = document.getElementById("threeNodes")
console.log(mainNodes)

// accessing the children of an element
const listOfNodes = mainNodes.children
console.log(listOfNodes)
// access the second item in the array and set style
listOfNodes[1].style.margin = "10px 0"

// using firstElementChild to get the first element of another element
const firstNodeType = mainNodes.firstElementChild
console.log(firstNodeType.textContent)

/* Attribute Node */
// accessing the element by id
const learnMore = document.getElementById("learn")

// getting the value of the attribute using getAttribute
console.log(learnMore.getAttribute("href"))
console.log(learnMore.getAttribute("class"))

// setting the value of the attribute using setAttribute
learnMore.setAttribute("target", "_blank")

/* Manipulating Classes  */
learnMore.classList.add("btn")

const fakeConsole = document.getElementById("box")
fakeConsole.setAttribute("style", `
background-color: powderblue;
padding: 10px;
border: 1px solid black;`)

fakeConsole.innerHTML += "<p>This is a fake console, where we can output our information</p>"
fakeConsole.innerHTML += "The above URL is " + learnMore.getAttribute("href")

fakeConsole.innerHTML += "<p> The id of the above link is " + learnMore.id + "</p>"
