const fs = require('fs');
const input = fs.readFileSync('day03_input.txt', 'utf8');

// PART 1 - find the sum of the priority of the items which are in each compartment of each rucksack
const priorities = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const rucksacks = input.split('\n').map(r => [r.slice(0, r.length / 2), r.slice(r.length / 2)]);

const errors = rucksacks.map(([a, b]) => a.split('').filter(c => b.includes(c))[0]);

const total = errors.reduce((sum, c) => sum + priorities.indexOf(c), 0);
console.log(total);

// PART 2 - find the priority of the elves' badge items (each 3 rucksacks have 1 item in common)
const trios = input.split('\n').reduce((arr, r, i) => {
  if (i / 3 === Math.floor(i / 3)) {
    arr[i / 3] = [r];
  } else {
    arr[Math.floor(i / 3)].push(r);
  }

  return arr;
}, []);

const badges = trios.map(([a, b, c]) => a.split('').filter(char => b.includes(char) && c.includes(char))[0]);
const badgeTotal = badges.reduce((sum, b) => sum + priorities.indexOf(b), 0);
console.log(badgeTotal);