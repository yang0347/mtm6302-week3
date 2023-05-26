//console.log("Js file is here") (check the website is working, it will delet)

//accessing document property (光标在最前面， option + 上下左右键 可以串行串列)
console.log(document.title)

//finding an element by id (box)
const infoPara = document.getElementById("info")
console.log(infoPara)
console.dir(infoPara) // if console.log() shows us the string verson of the object(if refresh the web is not work) we can use console.dir() method 

// infoPara.textContent += "Abhay" // 在这一段中，不是这个段落=Abhay。所以add “+”表示在这个句子后面加个东西

//addition assignment to the textContent property of infoPara
infoPara.textContent += "Abhay"

// finding an element using CSS selector 
let container = document.querySelector(".container")
console.log(container)

//using style object of an element
container.style.maxWidth = "800px"
container.style.margin = "0 auto"

//finding all the elements using CSS selector
let allNodes = document.querySelectorAll(".type")
console.log(allNodes)
//accessing the element on second position and setting its style. background (include color)
allNodes[1].style.background = "cyan"

for(let eachNode of allNodes){
    //console.log(eachNode.textContent) looping through the allNodes array and assigning style.border to each items 
    eachNode.style.border = "1px solid black"
}

 /* Traversing the DOM */
 //finding the element by ID
 const mainNodes = document.getElementById("threeNodes") 
 console.log(mainNodes)  

const listOfNodes = mainNodes.children
listOfNodes[1].style.margin = "10 0"


