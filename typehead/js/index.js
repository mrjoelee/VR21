// Build a typehead - barebones - use LinkedIn Learning or Google for reference

// HTML, CSS, AND JavaScript

// Needs - input, unordered list and anchor

// const arrayOfObjects = [{name: "Fox", link: "foxnews.com"},{name: "Fandango", link: "fandango.com"}, {name: "CNN", link: "cnn.com"}];

// -Create a search input field that as a user is typing it renders a list of suggestions
// -It has an onChange event that searchs an array of objects
// -Then dynamically display a list of suggestions

// - Each item on the list is a link

// - Bonus - Add a debounce feature
"use strict";

const arrayOfObj = [
  { name: "Fox", link: "foxnews.com" },
  { name: "Fandango", link: "fandango.com" },
  { name: "CNN", link: "cnn.com" },
  { name: "Google", link: "google.com" },
  { name: "YouTube", link: "youtube.com" },
  { name: "Instagram", link: "instagram.com" },
  { name: "Amazon", link: "amazon.com" },
  { name: "Maps Google", link: "google.maps.com" },
  { name: "Udemy", link: "udemy.com" },
  { name: "Telegram", link: "telegram.org" },
  { name: "Discord", link: "discord.com" },
  { name: "Slack", link: "slack.com" },
];
const MAX_RESULTS = 3;
const searchInput = document.querySelector("#myInput");
const searchBtn = document.querySelector("#search-btn");

searchInput.addEventListener("keyup", debounce(keyUp));
searchBtn.addEventListener("click", visitPage);

function keyUp(event) {
  const userInput = searchInput.value.toLocaleLowerCase();

  clearSuggestions();

  if (userInput) {
    //words that contain the text the user has typed so far
    //An Alternative is to use. contains instead of a startsWith
    const suggestions = arrayOfObj
      .filter((result) => result.name.toLocaleLowerCase().startsWith(userInput))
      .slice(0, MAX_RESULTS);
    showTypeHead(suggestions);
  }
}

function showTypeHead(suggestions) {
  const ul = document.querySelector("#suggestions");

  if (suggestions.length === 0) {
    alert("No Matching Words, Please Try Again");
  } else {
    //looping to each result
    suggestions.forEach((result) => {
      const li = document.createElement("option");
      li.innerHTML = `
            <a href ="${result.link}">${result.name}</a>
            `;
      ul.append(li);
      //   function visitPage() {
      //     window.location = "${result.link}";
      //   }
    });
  }
}

function clearSuggestions() {
  const ul = document.querySelector("#suggestions");
  while (ul.firstElementChild) {
    ul.firstElementChild.remove();
  }
}

function debounce(func, timeout = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args); //calling the function with the arguments
    }, timeout);
  };
}
