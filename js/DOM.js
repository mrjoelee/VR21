//w/o using querySelector select section with an id of container
 document.getElementById("container");

//use querySelector to select section with an id
const querySelector = document.querySelector("#container");

//select all of the list items with a class of "second"
document.getElementsByClassName(".second");

//Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector(`ol .third`);

//Give the section with an id of container the text “Hello!”.
// document.querySelector(`#container`).innerText = `Hello`;

//Add the class main to the div with a class of footer.
let footer = document.querySelector(".footer");
footer.classList.add("main");

//remove the class main on the div with a class of footer
footer.classList.remove("main");

//create a new li element
const newLi = document.createElement(`li`);

//give newli a text 4
newLi.innerText = "4";

//append the newli
// document.querySelector("ul").append(newLi);

//make ordered list background green
const  orderedList = document.querySelector("ol > li");
for(i = 0; i <= orderedList.length; i++){
document.orderedList[i].style.backgroundColor = "green";
}

//remove footer
let footer1 = document.querySelector(".footer");
footer1.remove();



