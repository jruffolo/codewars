var isSquare = function(n){
    let count = 1;
    let sum = 0;
    let result = false;
    
    // guard clause for negative numbers (they cannot be squares)
    if (n < 0) return false;
    
    // squares are a consecutive sum of odd numbers i.e. 1 + 3 = 4; 1 + 3 + 5 = 9; etc
    // keep checking and adding each odd number to sum until sum > n and then we will know if it is a square
    while (sum <= n) {
      if (sum === n) result = true;
      sum += count;
      count += 2;
    }
    
    return result;
  }