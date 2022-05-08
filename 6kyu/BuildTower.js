function towerBuilder(nFloors) {
    let currentFloor = 1;
    let tower = [];
    
    while (currentFloor <= nFloors) {
      let floor = ' '.repeat(nFloors - currentFloor) + '*'.repeat(currentFloor * 2 - 1) + ' '.repeat(nFloors - currentFloor);
      tower.push(floor);
      currentFloor++;
    }
    
    return tower;
  }