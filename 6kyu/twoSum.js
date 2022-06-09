function twoSum(numbers, target) {
  const numSet = new Set(numbers);
  
  for (const num of numSet) {
    let inverse = target - num;
    if (numSet.has(inverse)) {
      const numIndex = numbers.indexOf(num);
      const inverseIndex = numbers.lastIndexOf(inverse);
      
      if (numIndex === inverseIndex) continue;
      else return [numIndex, inverseIndex];
    }
  }
}
