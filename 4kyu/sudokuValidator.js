function validSolution(board){
  const ruleSet = new Set([1,2,3,4,5,6,7,8,9]);
  const compareSets = (setA, setB) => {
    if (setA.size !== setB.size) return false;
    for (const entry of setA) if (!setB.has(entry)) return false;
    return true;
  }
  
  const columns = board.reduce((cols, row) => {
    row.forEach((entry, i) => cols[i].push(entry));
    return cols;
  }, Array.from(Array(9), col => []));
  
  const squares = board.reduce((sqs, row, i) => {
    for (let j = 0; j < 3; j++) {
      sqs[j + Math.floor(i/3)*3].push(...row.slice(j*3, j*3 + 3));
    }
    return sqs;
  }, Array.from(Array(9), sq => []));
  
  const lines = board.concat(columns, squares);
  for (const line of lines) {
    if (!compareSets(new Set(line), ruleSet)) return false;
  }
  
  return true;
}

// PREP
// Parameters: A 9x9 array containing only digits from 0-9 representing a sudoku board

// Returns: A boolean value representing whether or not the board is a valid solution

// Examples: arr[9][9] --> true, or false depending on whether or not each row/col/square has 1-9 and no 0s

// Pseudocode: Loop through each row arr, assign each to a column[] and square[]
//             compare each row, col, sq to a set {1-9} and if any aren't equivalent, return false
//             else return true
