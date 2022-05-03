function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(sheep => sheep === true).reduce((sum, sheep) => sum += 1, 0)
  }