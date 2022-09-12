function isSolved(board) {
  let flatBoard = [...board[0], ...board[1], ...board[2]];
  let lines = {'rows': [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
               'cols': [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
               'diags': [[0, 4, 8], [2, 4, 6]]};
  
  // if any line is all 1s or 2s, return 1 or 2 respectively
  for (const set in lines) {
    for (const line of lines[set]) {
      let res = checkEqual(flatBoard, line);
      if (res) return res;
    }
  }
  
  // if we don't have a winner, return -1 if game is unfinished (board has 0s)
  // otherwise, return 0 (all spaces filled, cats game)
  return flatBoard.includes(0) ? -1 : 0;
}

function checkEqual(arr, i) {
  return (arr[i[0]] === 1 || arr[i[0]] === 2) &&
         arr[i[0]] === arr[i[1]] &&
         arr[i[0]] === arr[i[2]] ? arr[i[0]] : 0;
}
