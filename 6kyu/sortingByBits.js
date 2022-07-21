function sortByBit(arr) {
  let arr2 = arr.map(n => [n, numOnBits(n)])
                .sort(([a, b], [x, y]) => b - y !== 0 ? b - y : a - x)
                .map(a => a[0]);
  
  for (const n of arr2) {
    arr.shift();
    arr.push(n);
  }
}

function numOnBits(dec) {
  return dec.toString(2).split('').filter(n => n === '1').length;
}
