'use strict';

// Data needed for a later exercise

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
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//looping over objects
//Object.keys gives an array with just the key names

// for (const day of Object.keys(restaurant.openingHours)) {
//   console.log(day);
// }

//Object.values()
//it will retun an array of all the values, then you can iterate over them using the for of loop
// const values = Object.values(restaurant.openingHours);
// console.log(values);

//Object.entries()
//basically like the entries method on the arrays and also the dict.items() method in python

// const entries = Object.entries(restaurant.openingHours);
// for (const [i, { open: j, close: k }] of entries) {
//   console.log(i, j, k);
// }

//similar to dictionary.keys() method in python
//OPTIONAL CHAINING
// console.log(restaurant.openingHours?.mon?.open);
//this will check if monday exists and then go towards the next one, this will not give out an error but instead return undefined

//optional chaining works well with the nullish operator, this could handle the undefined getting returned

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (let dish of menu) console.log(dish);

//array.entries returns an array with the position and the value, it is not particularly an array but it is an iterable i thinks
// for (let [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

//SPEAD OPERATOR
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

//REST OPERATOR
// const [a, b, ...c] = [1, 2, 3, 4, 5];
// console.log(a, b, c);

//BOTH REST AND SPREAD OPERATORS ARE USED
// const [pizza, , risotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherfood);

//objects, you do not have to spread an object is see
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

//testing

// const obj1 = {
//   a: 'a',
//   b: 'b',
//   c: 'c',
// };

// const obj2 = {
//   d: 'd',
//   e: 'e',
//   f: 'f',
// };
//spread only when two or more objects are needed
// const { a, b, ...others } = { ...obj1, ...obj2 };
// console.log(a, b, others);

//REST: used in parameters in a function

// const add = function (...num) {
//   let sum = 0;
//   num.forEach(i => {
//     sum += i;
//   });
//   console.log(sum);
// };

// add(1, 2, 3, 4, 5, 6, 7);

// const x = [1, 2, 3, 4, 5, 6, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'spinachs');

//SHORT CIRCUITING, BASICALLY IF AND NOT IF

// a || b is basically if a is true then only a will run, but if a is not true then b will be executed
// a || b is basically if a is true then only will b be run, if a is false, then b will not run

// console.log(3 || 'uday');
// console.log(' ' || 'uday');
// console.log(0 || 'uday');
// console.log(undefined || null);
// console.log(null || undefined);

//undefined and null both are falsy values
// '' (or empty sting) is also a falsy value, but ' ' or a space is not a falsy value

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
//OUTPUT: Hello, it will stop at hello as it is a truthy value and will return true

// restaurant.numGuest = 12;

//BOTH OF THEN SERVE THE SAME FUNCTION
// const guests = restaurant.numGuest ? restaurant.numGuest : 10;
// const guests = restaurant.numGuest || 10;

// console.log(guests);

// || short circuits on a truthy value
// && short circuits on a falsy value
//?? short circuits on a nullish values

// restaurant.numGuest = 0;

// const guests = restaurant.numGuest ? restaurant.numGuest : 10;
// const guests = restaurant.numGuest || 10;

// OUTPUT: 10

//SOLUTION
// const guests = restaurant.numGuest ?? 10;

// ?? works with the idea of nullish values and not falsy values
// nullish values: null and undefined
// restaurant.numGuest = '';
// const guests = restaurant.numGuest ?? 10;
// console.log(guests);

// const rest1 = {
//   name: 'Caprt',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La piazza',
//   owner: 'uday',
// };

// rest2.numGuests = rest2.numGuests || 10;

//logical assignment operator
//rest2.numGuests ||= 10;

//nullish assignment operator, if the value is zero
// rest2.numGuests ??= 10;

// console.log(rest2.numGuests);

//CHALLENGE 1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //#1
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// console.log(players1);
// console.log(players2);

// //#2
// const [bayernGK, ...BayernFieldPlayers] = [...game.players[0]];
// console.log(bayernGK, BayernFieldPlayers);

// //#3
// const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);

// //#4
// const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //#5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// //#6
// const printGoals = (...names) => {
//   const goalers = new Set();
//   names.forEach(name => {
//     goalers.add(name);
//   });
//   let scored = 0;
//   goalers.forEach(scorer => {
//     names.forEach(i => {
//       if (i == scorer) {
//         scored++;
//       }
//     });
//     console.log(`${scorer}: ${scored}`);
//     scored = 0;
//   });
// };

// printGoals(...game.scored);
// console.log('-----');
// printGoals('Davies', 'Muller', 'Lewndowski', 'Kimmich');

// //#7

// team1 > team2 || console.log('Team 2 has greater chances of winning');
// team1 > team2 && console.log('Team 1 has a greater chance of Winning');

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1
// for (const [i, j] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${j}`);
// }

// //2
// let total = 0;
// for (const x of Object.values(game.odds)) {
//   total += x;
// }
// const average = total / Object.keys(game.odds).length;
// console.log(`The average odd: ${average}`);
// //3

// for (const [key, value] of Object.entries(game.odds)) {
//   const ab = key == 'x' ? 'Draw' : game[key];
//   console.log(`Odd of ${ab}: ${value}`);
// }

//Sets

// const orderSet = new Set(['Pasta', 'Risotto', 'Pizza']);
// let arr = ['Pasta', 'Risotto', 'Pizza'];
// console.log(...orderSet);
//the arrays has the length method but this one has the size method
//the array method and set methods are very different
// console.log(orderSet.size);
// console.log(arr.length);

//the arrays has the includes method, whereas the sets have the has method
// console.log(orderSet.has('Pasta'));
// console.log(arr.includes('Pizza'));

// Adding an element
// orderSet.add('Garlic Bread');
// arr.push('Garlic Bread');

//removing a specific element
// orderSet.delete('Risotto');
// arr = arr.filter(i => i != 'Risotto');

// console.log(...orderSet);
// console.log(...arr);

//used to clear the entire set
// orderSet.clear()

//MAPS ----->

// const rest = new Map();
//to all elements to the map
// rest.set('name', 'classico italiano');
//you can use amy datatype
// rest.set(1, 'Firenze, italy');
//the set method also returns the entire map
// console.log(rest.set(2, 'lisbon, portugal'));
//you can chain
// rest
// .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open', 11)
// .set('close', 23)
// .set(true, 2);

//retreiving values
// console.log(rest.get('open'));
// console.log(rest.get(true));

//membership method
// console.log(rest.has('categories'));

//deleting an element
// rest.delete(1);
// console.log(rest);

//Converting objects to maps
//maps are just an array of arrays
//const newMap = new Map(Object.entries(obj));

//convert map to array
// console.log([...question]);

//Coding challenge 3

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

//1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

//2
// gameEvents.delete(64);
// console.log(gameEvents);

//3
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

//4
// for (const [i, j] of gameEvents.entries()) {
//   const statement = i <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
//   console.log(`${statement} ${i}: ${j}`);
// }

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('button'));
// document.body.append(document.createElement('textarea'));
// let counter = 0;
// document.querySelector('button').addEventListener('click', () => {
//   //when using inpur fields, it uses value not text content
//   const text = document.querySelector('textarea').value;
//   const words = text.toLowerCase().trim().split('_');
//   let final = '';
//   counter++;
//   for (const [i, j] of words.entries()) {
//     if (i === 0) {
//       final = final + j;
//     } else {
//       // fucking call the method
//       final = final + j[0].toUpperCase() + j.slice(1);
//     }
//   }
//   console.log(final.padEnd(20, ' ') + '✅'.repeat(counter));
// });

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// const final = [];
// const words = flights.split('+');
// for (const word of words) {
//   const [first, from, to, time] = word.split(';');
//   const firstFinal = first.split('_');
//   firstFinal = firstFinal.join(' ');
//   const fromFinal = from.slice(0, 3).toUpperCase();
//   const toFinal = to.slice(0, 3).toUpperCase();
//   const [hrs, min] = time.split(':');
//   final.push(`${firstFinal} from ${fromFinal} to ${toFinal} (${hrs}h${min})`);
// }

// for (const i of final) {
//   if (i.includes('Delayed')) {
//     console.log(('🔴 ' + i).padStart(50));
//   } else {
//     console.log(i.padStart(50));
//   }
// }

const code = text => text.slice(0, 3).toUpperCase();
for (const i of flights.split('+')) {
  const [type, from, to, time] = i.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${code(from)} to ${code(to)} ${time.replace(':', 'h')}`.padStart(50);
  console.log(output);
}
