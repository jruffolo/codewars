const fs = require('fs');
const input = fs.readFileSync('day01_input.txt', 'utf8');

// PART 1 - find the amount of calories held by the elf holding the most calories

// Split by empty line to separate each elf 
// then split again by newline to get each food item 
// finally sum each elf's array of calories to get the total
const lines = input.split('\n\n')
                   .map(s => s.split('\n')
                              .reduce((sum, n) => sum + +n, 0));

// Find the amount of calories held by the most calorically dense elf inventory
console.log(Math.max(...lines));


// PART 2 - find the sum of top three elves' inventory
console.log(lines.slice()
                 .sort((a, z) => z - a)
                 .slice(0,3)
                 .reduce((sum, n) => sum + +n, 0));