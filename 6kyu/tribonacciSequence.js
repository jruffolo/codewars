function tribonacci(signature, n){
    if (n === 0) return [];
    else if (n <= 3) return signature.slice(0, n);
    
    const sliceSum = slice => slice.reduce((sum, num) => sum += num, 0);
    let arr = signature;
    
    for (let i = 0; i < n - 3; i++) {
      arr.push(sliceSum(arr.slice(i, i + 3)));
    }
    
    return arr;
  }