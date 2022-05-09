function betterThanAverage(classPoints, yourPoints) {
    const avg = (classPoints.reduce((sum, num) => sum += num, 0)) / classPoints.length;
    return yourPoints > avg;
  }