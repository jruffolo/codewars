function persistence(num, its) {
    // recursive solution
    // if only 1 digit, return iterations, otherwise pass product and iteration count back into function
    
    let digits = num.toString().split('');
    let iterations = its || 0;
    if (digits.length === 1) {
      return iterations;
    } else {
      let multiplied = digits.reduce((product, n) => product *= n, 1);
      iterations++;
      return persistence(multiplied, iterations);
    }