function stray(numbers) {
    let strayNum;
    for (let i = 0; i < numbers.length; i++) {
      // Find the common number, then filter the array to exclude it
      if (numbers[i] === numbers[i+1]) {
        strayNum = numbers.filter(num => num !== numbers[i]);
        
        // Break the loop, since we don't need to check the rest of the array once we have the common number
        break;
      }
    }
    // Return the only value in the filtered array
    return strayNum[0];
  }