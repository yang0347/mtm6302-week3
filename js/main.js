//console.log("Js file is here") (check the website is working, it will delet)

//accessing document property (光标在最前面， option + 上下左右键 可以串行串列)
console.log(document.title)

//finding an element by id (box)
const infoPara = document.getElementById("info")
console.log(infoPara)
console.dir(infoPara) // if console.log() shows us the string verson of the object(if refresh the web is not work) we can use console.dir() method 

infoPara.textContent = "Abhay"



