const removeSmallest = numbers => numbers.filter((num, index) => index !== numbers.indexOf(Math.min(...numbers)));
