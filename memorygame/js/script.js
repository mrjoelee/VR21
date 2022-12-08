"use strict";
const gameContainer = document.getElementById("game");
let cardMatched = 0;
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    //adding a data set to the div
    newDiv.dataset.color = color;

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

  //saving the clicked card in to a cardClicked variable
  const cardClicked = event.target;

  //adding a class flipped when clicking on a card it gets flipped
  cardClicked.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");

  cardClicked.style.backgroundColor = cardClicked.classList[0];

  
  if(flippedCards.length === 2){
    console.log(flippedCards);
    
    if(flippedCards[0].dataset.color === flippedCards[1].dataset.color){
      //right now it's at 0, but increments by 2
      cardMatched +=2;
      // console.log("true");
      flippedCards.forEach((card) =>{
        card.classList.remove("flipped");
      })
      
      console.log(cardMatched);

    } else {
      // console.log("false");
      flippedCards.forEach((card) => {
        setTimeout(function () {
          card.style.backgroundColor = ``;
        },1000);
        card.classList.remove("flipped");
      });
      
    }
  }

  if(cardMatched === COLORS.length) {
    setTimeout(function () {
      alert("game over!");
    }, 500);
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
