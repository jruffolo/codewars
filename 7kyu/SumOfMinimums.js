function sumOfMinimums(arr) {
    return arr.reduce((sum, arrVal) => sum += Math.min(...arrVal), 0);
  }