const fs = require('fs');
const input = fs.readFileSync('day05_input.txt', 'utf8');

// PART 1 - which crate will end up on top of each stack?

// [ A ]   [   ]   [ B ]
// 0 * 2 3 4 * 6 7 8 * 10
//   1,      5,      9,       13 so where index % 4 = 1
// convert from lines to column stacks
let crates = input.split('\n\n')[0]
                    .split('\n')
                    .map(line => line.split('').filter((_, i) => i % 4 === 1))
                    .slice(0, -1)
                    .reduceRight((arr, a) => {
                      for (let i = 0; i < a.length; i++) {
                        if (a[i] !== ' ') arr[i].push(a[i]);
                      }

                      return arr;
                    }, [[], [], [], [], [], [], [], [], []]);

// move 1 from 2 to 3 --> every odd index of a split(' ')
// [amount, origin, destination]
const instructions = input.split('\n\n')[1]
                          .split('\n')
                          .map(line => line.split(' ').filter((_, i) => i % 2 === 1));

// now we can interpret the instructions and mutate the crate arrays
// dest - 1, orig - 1 to fix off by 1
for (const [amount, origin, destination] of instructions) {
  for (let i = 0; i < amount; i++) {
    crates[destination - 1].push(crates[origin - 1].pop());
  }
}

// print the last (top) crate in each stack
console.log(crates.reduce((str, crate) => str + crate[crate.length - 1], ''));

// PART 2 - pick up multiple crates at once and retain the order they are stacked in
// reset the crates (lol)
crates = input.split('\n\n')[0]
              .split('\n')
              .map(line => line.split('').filter((_, i) => i % 4 === 1))
              .slice(0, -1)
              .reduceRight((arr, a) => {
                for (let i = 0; i < a.length; i++) {
                  if (a[i] !== ' ') arr[i].push(a[i]);
                }

                return arr;
              }, [[], [], [], [], [], [], [], [], []]);

// we don't need to use pop on stacks now, we can just push splices starting from the end of the stack
for (const [amount, origin, destination] of instructions) {
  crates[destination - 1].push(...crates[origin - 1].splice(-amount));
}

// print the last (top) crate in each stack
console.log(crates.reduce((str, crate) => str + crate[crate.length - 1], ''));