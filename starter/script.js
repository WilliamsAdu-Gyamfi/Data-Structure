"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const [a, , b] = restaurant.mainMenu;
console.log(a, b);

const { name: bar, location: place } = restaurant;
console.log(bar, place);

let c = 10;
let d = 20;
const obj = { c: 12, d: 25 };
({ c, d } = obj);
//console.log(c, d);

const {
  fri: { open, close },
} = restaurant.openingHours;
//console.log(open, close);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];
//console.log(mainMenuCopy);

// Merging two arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
//console.log(menu);

const arr = [1, 2, ...[3, 4]];
//console.log(arr);
//console.log(...arr);

const arr1 = [1, 2, 3, 34, 4];
const badarr = [-1, 0, arr1[0], arr1[1], arr1[2]];
//console.log(badarr);

const reccomendedarr = [-1, 0, ...arr1];
//console.log(...reccomendedarr);

// functions
const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};

add(3, 7, 10);

//CODING CHALLENGE
/*
Data Structures, Modern Operators and Strings 
Coding Challenge #1 
We're building a football betting app (soccer for my American friends 
�
�)! 
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data. 
Your tasks: 
1. Create one player array for each team (variables 'players1' and 
'players2') 
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players 
3. Create an array 'allPlayers' containing all players of both teams (22 
players) 
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic' 
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2') 
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in) 
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator. 
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored 
GOOD LUCK 
�
�
 15 
 */
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
];

const players2 = [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
];

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const [gk2, ...fieldPlayers2] = players2;
console.log(gk2, fieldPlayers2);
/*
//const fieldPlayers = [
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
];
*/

/*
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const substitute = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = [...substitute, ...players1];
console.log(players1Final);

/*
 odds: { 
      team1: 1.33, 
      x: 3.25, 
      team2: 6.5, 
    }, 
    */
/*
const team1 = 1.33;
const draw = 3.25;
const team2 = 6.5;
*/

/*
//DESTRUCTURING
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
*/
/*

//FROM STACKOVERFLOW

function printGoals(...players) {
  // Print each player's name to the console
  players.forEach(player => console.log(player));
  // Print the total number of goals (i.e., the number of player names)
  console.log(`Total goals scored: ${players.length}`);
}
// Example usage:
printGoals('Messi', 'Ronaldo', 'Mbappe', 'Neymar');
*/

/*
const printGoals = function (...players) {
  // for (let i = 0; i < players.length; i++) {   //There is no need for loop
 
  console.log(players);
  console.log(`Total goals scored: ${players.length}`);
  //}
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');

// USING IF/ELSE STATEMENT
console.log('------USING IF/ELSE STATEMENT-------');
if (team1 < team2) {
  console.log('team1 is more likely to win');
} else if (team1 > team2) {
  console.log('team2 is more likely to win');
} else {
  console.log('draw');
}

//USING DESTRUCTURING METHOD
console.log('----USING DESTUCTURING METHOD------');
team1 < team2 && console.log(`team1(${team1}) is more likely to win.`);
team2 < team1 && console.log(`team2(${team2}) is more likely to win.`);

//Coding Challenge #2
/*
Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
 */

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

/*
const averageOdds = function (odds) {
  let sum = 0;
  for (let i = 0; i < game.odds.length; i++) sum += game.odds[i];
  const average = sum / game.odds.length;
  console.log(average);
  return average;
};
console.log(`Average odd: ${averageOdds}`);
*/
//N0 1
// Get all odds values
const odds = Object.values(game.odds);

//NO 2
// Initialize a sum variable

let sum = 0;

// Loop through the odds to calculate the sum
for (const odd of odds) {
  sum += odd;
  console.log(odd);
}

// Calculate the average
const averageOdd = sum / odds.length;

// Log the average odd to the console
console.log(`Average odd: ${averageOdd}`);

/*
//ALTERNATELY NO2
let sum = 0;
for (const odd of Object.values(game.odds)) sum += odd;
sum /= Object.values(game.odds).length;
console.log(sum);
*/

//NO 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}

// Destructure the team names and odds from the game
/*
const game1 = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  odds1: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};

//const { team1, draw, team2 } = game1.odds;
//console.log(game1.odds);
const { team1: team1Name, team2: team2Name, odds1 } = odds;
const { team1: oddTeam1, draw: oddDraw, team2: oddTeam2 } = odds;
console.log(odds);
console.log(oddTeam1);

// Print the formatted odds to the console
console.log(`Odd of victory ${team1}: ${oddTeam1}`);
console.log(`Odd of draw: ${oddDraw}`);
console.log(`Odd of victory ${team2}: ${oddTeam2}`);
//const {odds:{team1:, x:Odd of draw,  team2:Odd of victory Borrussia Dortmund}} = game
/*
//DESTRUCTURING
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
*/

const rest = new Map();
rest.set("location", "Ghana");
console.log(rest.get("location"));

const question = new Map([
  ["question", "What is th best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScipt"],
  ["correct", 3],
  [true, "Corret🤝"],
  [false, "try Again!😊"],
]);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

//const answer = Number(prompt('Your answer'));
//console.log(answer);

//console.log(question.get(question.get('correct') === answer));

//CODING CHALLENGE 3
/*
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time). 
Your tasks: 
1. Create an array 'events' of the different game events that happened (no 
duplicates) 
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log. 
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes) 
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this: 
[FIRST HALF] 17: ⚽GOAL 
 */

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(...gameEvents);

console.log(`An event happened, on 
average, every ${90 / gameEvents.size} minutes`);

for (const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[FIRST HALF] ${key}: ${value}`);
  } else {
    console.log(`[SECOND HALF] ${key}: ${value}`);
  }
}

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got middle seat");
  } else {
    console.log("You are lucky😘");
  }
};

checkMiddleSeat("25A");

const correctName = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return passengerCorrect;
};
console.log(correctName("willIAms"));
console.log(correctName("gYAmfi"));

/*
const email = "hello@williamss.io";
const loginEmail = "Hello@williams.IO";
const emailLower = loginEmail.toLowerCase();
const correctEmail = emailLower.trim();
console.log(correctEmail);
//OR
const supposedEmail = loginEmail.toLowerCase().trim();
console.log(supposedEmail);
*/

function areEmailsMatching(correctEmail, emailToCheck) {
  // Convert both emails to lowercase to ensure the comparison is case-insensitive
  const normalizedCorrectEmail = correctEmail.toLowerCase().trim();
  const normalizedEmailToCheck = emailToCheck.toLowerCase().trim();

  // Compare the two emails
  return normalizedCorrectEmail === normalizedEmailToCheck;
}

const correctEmail = "hello@williams.io";
const emailToCheck = "Hello@WilliamS.io";

console.log(areEmailsMatching(correctEmail, emailToCheck));
