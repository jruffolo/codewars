function queueTime(customers, n) {
  let totalTime = 0;
  
  while (customers.filter(n => n > 0).length) {
    let quota = 0;
    
    for (let i = 0; i < customers.length; i++) {
      if (customers[i] === 0) {
        customers.splice(customers.indexOf(customers[i]), 1);
        i--;
      } else {
        customers[i]--;
        quota++;
        if (quota === n) break;
      }
    }
    
    totalTime++;
  }
  
  return totalTime;
}

// PREP
// Parameters: An array of positive ints where each one is a customers checkout time, an a positive int representing # of tills

// Returns: A positive int representing the total amount of time for all customers to check out

// Examples: [1, 3, 5], 2 --> init: 1 3 (5) --> 1: 5 2 --> 2: 4 1 --> 3: 3 --> 4: 2 --> 5: 1 --> 6: 0, 6 units of time total

// Pseudocode: While customers are in array, decrement 1 from up to n customers (in order) and add 1 to total time
//             When a customer is finished, remove them from the list of customers (splice)
//             Once there are no more customers, return total time
