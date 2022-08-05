/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let rows = {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}};
  let columns = {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}};
  let squares = {'0 0': {}, '0 1': {}, '0 2': {}, '1 0': {}, '1 1': {}, '1 2': {}, '2 0': {}, '2 1': {}, '2 2': {}};
  
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === '.') continue;
      
      let value = board[row][col];
      let square = `${Math.floor(row / 3)} ${Math.floor(col / 3)}`;
      
      if (rows[row][value] || columns[col][value] || squares[square][value]) return false;
      
      else {
        rows[row][value] = true;
        columns[col][value] = true;
        squares[square][value] = true;
      }
    }
  }
  
  return true;
};
