let userChoice = headsortails;
let randomNumber = x;
let computerChoice = headsortails;
function headsortails (x) {
  if (userChoice == computerChoice){
    return "You guessed right! The coin flip landed on" + userChoice;
  } 
  return "Sorry, the coin flip landed on" + computerChoice;
  }
  function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let birthYear = birthyear;
function birthyear (val) {
  if (val>21){
  return alert="You are old enough to drink in the US";
}
if (val=21){
  return alert="You are old enough to drink in the US...barely";
}
if (val<21){
  return alert="Sorry, you are not old enough to drink in the US";
}
}