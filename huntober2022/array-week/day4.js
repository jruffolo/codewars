let myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];

function moveUp(entry, grid) {
  let x, y;
  
  for (let i = 0; i < grid.length; i++) {
    if (grid[i].includes(entry)) {
      y = i;
      x = grid[i].indexOf(entry);
    }
  }

  if (y > 0) {
    grid[y][x] = grid[y-1][x];
    grid[y-1][x] = entry;
  }
}

function moveDown(entry, grid) {
  let x, y;
  
  for (let i = 0; i < grid.length; i++) {
    if (grid[i].includes(entry)) {
      y = i;
      x = grid[i].indexOf(entry);
    }
  }

  if (y < grid.length - 1) {
    grid[y][x] = grid[y+1][x];
    grid[y+1][x] = entry;
  }
}

console.log(myGrid);

moveUp('h', myGrid);
console.log(myGrid);

moveUp('h', myGrid);
console.log(myGrid);

moveUp('h', myGrid);
console.log(myGrid);

moveDown('f', myGrid);
console.log(myGrid);

moveDown('f', myGrid);
console.log(myGrid);
