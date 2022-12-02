const fs = require('fs');
const input = fs.readFileSync('day02_input.txt', 'utf8');

// PART 1 - Calculate your RPS tournament score according to the strategy guide where X is rock, Y is paper, Z is scissors
const shapes = {'X': 1, 'Y': 2, 'Z': 3};
const matchups = {'X': {'A': 3, 'B': 0, 'C': 6},
                  'Y': {'A': 6, 'B': 3, 'C': 0},
                  'Z': {'A': 0, 'B': 6, 'C': 3}};

const rounds = input.split('\n').map(s => s.split(' '));
let score = 0;

for (const [opponentShape, yourShape] of rounds) {
  score += shapes[yourShape] + matchups[yourShape][opponentShape];
}

console.log(score);

// PART 2 - Recalculate your score where X is lose, Y is draw, and Z is win
const outcomes = {'X': 0, 'Y': 3, 'Z': 6};
const correctThrows = {'A': {'X': 3, 'Y': 1, 'Z': 2},
                       'B': {'X': 1, 'Y': 2, 'Z': 3},
                       'C': {'X': 2, 'Y': 3, 'Z': 1}};

score = 0;

for (const [opponentShape, outcome] of rounds) {
  score += outcomes[outcome] + correctThrows[opponentShape][outcome];
}

console.log(score);