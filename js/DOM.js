//w/o using querySelector select section with an id of container
const getElementById = document.getElementById("container");
console.log(getElementById.id);

//use querySelector to select section with an id
const querySelector = document.querySelector("#container");

//select all of the list items with a class of "second"
document.getElementsByClassName("second");

//Select a list item with a class of third, but only the list item inside of the ol tag.
document.getElementsByClassName("ol.third");

//Give the section with an id of container the text “Hello!”.
const text = document.querySelector("#container");
text.innerHTML = "Hello!."