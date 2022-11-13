function sum (numbers) {
    if (numbers.length === 0) return 0;
    
    return numbers.reduce((sum, num) => sum += num, 0);  
  }