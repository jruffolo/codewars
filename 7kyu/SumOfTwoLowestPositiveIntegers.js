function sumTwoSmallestNumbers(numbers) {  
    const [a, b] = numbers.sort((a, z) => a - z);
    
    return a + b;
  }