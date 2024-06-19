//-----------------------------------------------------------------------------------------------------------------------------------//
// Learning While Loops using Math.random -- Duck Goose
//-----------------------------------------------------------------------------------------------------------------------------------//

// let randomNumber = Math.floor(Math.random() * 10);

// while (randomNumber != 7) {
//   console.log("Duck 🦆");
//   randomNumber = Math.floor(Math.random() * 10);
// }

// console.log("Goose! 🦢");

//-----------------------------------------------------------------------------------------------------------------------------------//
// Learning While Loops using Math.random -- Lucky Number
//-----------------------------------------------------------------------------------------------------------------------------------//

const luckyNumber = 7;
let guess = Math.floor(Math.random() * 10) + 1;

while (luckyNumber != guess) {
  console.log("Nope, it isn't ", guess)
  guess = Math.floor(Math.random() * 10) + 1;
}

console.log("My lucky number is", guess, "!")

//-----------------------------------------------------------------------------------------------------------------------------------//
// Learning For Loops -- I Must Not Tell Lies x 100
//-----------------------------------------------------------------------------------------------------------------------------------//

for (let i = 1; i <= 100; i++){
  console.log("I Must Not Tell Lies")
}

//-----------------------------------------------------------------------------------------------------------------------------------//
// Learning For Loops -- Even and Odds
//-----------------------------------------------------------------------------------------------------------------------------------//

for (let i = 1; i <= 50; i++) {
  
  if (i % 2 == 1) {
    continue;
  }
  if (i == 44) {
    break;
  }
  console.log(i);
}

//-----------------------------------------------------------------------------------------------------------------------------------//
// Learning For Loops -- Even and Odds
//-----------------------------------------------------------------------------------------------------------------------------------//