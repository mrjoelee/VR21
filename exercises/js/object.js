let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
  };

//write command "Go" to the end of languages array
programming.languages.push("Go");
console.log(programming);

//change difficulty to 7
programming.difficulty = 7;
console.log(programming);

//delete key jokes
delete programming.jokes;
console.log(programming);

//add new K: isFun V: true
programming.isFun = true;
console.log(programming);
  