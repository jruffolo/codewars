function positiveSum(arr) {
    return arr.filter(num => num > 0).reduce((sum, num) => sum += num, 0)
  }