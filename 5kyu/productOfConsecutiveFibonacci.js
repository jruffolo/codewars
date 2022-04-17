function productFib(prod){
  let [fib1, fib2] = [0, 1];
  
  while (fib1*fib2 < prod) {
    [fib1, fib2] = [fib2, fib1 + fib2];
  }

  return fib1*fib2 === prod ? [fib1, fib2, true] : [fib1, fib2, false];
}
