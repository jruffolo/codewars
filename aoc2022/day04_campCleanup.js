const fs = require('fs');
const input = fs.readFileSync('day04_input.txt', 'utf8');

// PART 1 - in how many assignment pairs does one range fully overlap the other?
const pairs = input.split('\n').map(pair => pair.split(',').map(range => range.split('-').map(n => +n)));

let fullOverlaps = 0;

for (const [[l1, h1], [l2, h2]] of pairs) {
  if ((l1 <= l2 && h1 >= h2) || (l2 <= l1 && h2 >= h1)) {
    fullOverlaps++;
  }
}

console.log(fullOverlaps);

// PART 2 - how many assignment pairs overlap at all?
// too dumb to figure out overlaps so just found the ones that didn't overlap and subtracted from total pairs

let nonOverlaps = 0;
for (const [[l1, h1], [l2, h2]] of pairs) {
  if (h1 < l2 || h2 < l1) {
    nonOverlaps++;
  }
}

console.log(pairs.length - nonOverlaps);