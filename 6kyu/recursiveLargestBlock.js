function solution(input) {
  // Return 0 on bad input, clean input data for use
  if (input.length === 0) return 0;
  
  let validArr = [];
  for (let i = 0; i < 100; i++) {
    validArr.push(String(i).padStart(2, '0'));
  }
  
  let validCells = Array.from(new Set(input.split(',').filter(str => validArr.includes(str)).sort()));
  if (validCells.length === 0) return 0;
  
  
  // getNeighbors spits out any possible neighbor to a given cell
  const getNeighbors = cell => {
    const [x, y] = cell.split('');
    const edgeX = x === '0' || x === '9';
    const edgeY = y === '0' || y === '9';
    const corner = edgeX && edgeY;
    
    // Please forgive my horrific logic
    if (corner) {
      switch (cell) {
          case '00': return ['01', '10'];
          case '09': return ['08', '19'];
          case '90': return ['80', '91'];
          case '99': return ['89', '98'];
      }
    } else if (edgeX) {
      switch (x) {
        case '0': return [`${x}${+y + 1}`, `${+x + 1}${y}`, `${x}${+y - 1}`];
        case '9': return [`${x}${+y + 1}`, `${+x - 1}${y}`, `${x}${+y - 1}`];
      }
    } else if (edgeY) {
      switch (y) {
        case '0': return [`${+x - 1}${y}`, `${x}${+y + 1}`, `${+x + 1}${y}`];
        case '9': return [`${+x - 1}${y}`, `${x}${+y - 1}`, `${+x + 1}${y}`];
      }
    } else {
      return [`${+x - 1}${y}`, `${x}${+y + 1}`, `${+x + 1}${y}`, `${x}${+y - 1}`];
    }
  }

  // using getNeighbors, checkNeighbors keeps a history of all valid cells that are a part of a block
  // recursively runs through them until there are no more new neighbors found
  const checkNeighbors = (cell, history = [], queue = []) => {
    history.push(cell);
    const newNeighbors = getNeighbors(cell).filter(n => validCells.includes(n) && !history.includes(n));
    if (newNeighbors.length === 0 && queue.length === 0) {
      return history;
    } else {
        queue.push(...newNeighbors.filter(n => !queue.includes(n)));
        return checkNeighbors(queue[0], history, queue.slice(1));
      }
  }

  
  // run checkNeighbors over each cell, recording each complete block
  // only run checkNeighbors if a cell has not already been recorded as a part of a block
  let blocks = [];
  for (const cell of validCells) {
    if (![].concat(...blocks).includes(cell)) {
      blocks.push(checkNeighbors(cell));
    }
  }

  // return the biggest block size
  return Math.max(...blocks.map(b => b.length));
}
