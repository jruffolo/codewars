function dirReduc(arr){
    const inverseDirs = {'NORTH': 'SOUTH', 'SOUTH': 'NORTH', 'EAST': 'WEST', 'WEST': 'EAST'};
    
    for (let i = 0; i < arr.length - 1; i++) {
      let current = arr[i].toUpperCase();
      let next = arr[i+1].toUpperCase();
  
      if (current === inverseDirs[next]) {
        arr.splice(i, 2);
        i = -1;
      }
      
    }
    
    return arr;
  }