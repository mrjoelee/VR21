const user = {
}
user.name = prompt("please enter your name");
user.choice = prompt("Choose rock,paper,scissors");

//generate random number - 
const arrChoice = ["rock", "paper", "scissors"]; 
function generateRandomNum(max) {
    return Math.floor(Math.random()*max);
} 
    
//generate the computer
const randomNumber = generateRandomNum(arrChoice.length);
const aIChoice = arrChoice[randomNumber];
console.log(aIChoice);

const alertLose = alert(`Lose. ${user.name}: ${user.choice}, Computer: ${aIChoice}`);
const alertWin = alert(`Win. ${user.name}: ${user.choice}, Computer:${aIChoice} ` );
const alertTie = alert(`Tied. ${user.name}: ${user.choice}, Computer:${aIChoice} `);
const alertInvalid = alert(`${user.name}, please choose ${arrChoice}`);

//determine the winner
function didUserWin(user, aIChoice){
    //if the user chooses rock, and the computer is a paper - ai wins
    if(user.choice === `rock` && aIChoice === 'paper'){
         alertLose;

    //user = paper, ai = rock = users wins
    } else if(user.choice ===`rock` && aIChoice === `paper`){
         alertWin

    //user = scissors ai = rock, ai wins
    } else if (user.choice === "scissors" && aIChoice === `rock`){
         alertLose;

    //user = rock, ai = scissors, user wins    
    } else if(user.choice === `rock` && aIChoice === `scissors`){
         alertWin;

    //user = rock, ai = rock = tied  
    } else if (user.choice === aIChoice ){
         alertTie;
         return;

    } else if (!user.choice || arrChoice.indexOf(user.choice) === -1) {
         alertInvalid;
    }
    
}




//user = scissors, ai = scissors = tied 



//determines who wins - output message "computer" or "user"