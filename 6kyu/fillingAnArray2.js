const squares = n => Array.from(Array(n+1).keys(), n => n*n).slice(1);

const range = (n, start, step) => {
  let arr = [];
  for (let i = start; i < (start + (n*step)); i += step) {
    arr.push(i);
  }
  return arr;
}

const random = (n, min, max) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.round(Math.random() * (max - min)) + min)
  }
  return arr;
}

const primes = n => {
  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
  }
  let arr = [];
  let p = 2;
  while (arr.length < n) {
    if (isPrime(p)) arr.push(p);
    p++;
  }
  return arr;
}
