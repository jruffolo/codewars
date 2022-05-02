function countPositivesSumNegatives(input) {
    // Test for null first to prevent null.length error
      if (input === null || input.length === 0 ) return [];
    
    // Filter positives and count the amount with .length
      let posCount = input.filter(num => num > 0).length;
    // Filter negatives and .reduce to sum them
      let negSum = input.filter(num => num < 0).reduce((sum, num) => sum += num);
    
      return [posCount, negSum];
  }