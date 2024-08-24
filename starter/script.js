'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

//DESTRUCTURING
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

/*
//FROM CHATGPT
function printGoals(...players) {
  // Print each player's name to the console
  players.forEach(player => console.log(player));
  // Print the total number of goals (i.e., the number of player names)
  console.log(`Total goals scored: ${players.length}`);
}
// Example usage:
printGoals('Messi', 'Ronaldo', 'Mbappe', 'Neymar');
*/

const printGoals = function (...players) {
  // for (let i = 0; i < players.length; i++) {
  //There is no need for loop
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
