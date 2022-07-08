function nextSmaller(n) {
  if (n < 10) return -1;
  const digits = String(n).split('');

  for (let i = -2; i >= -digits.length; i--) {
    if (swapper(digits.slice(i), i + digits.length)) {
      return Number(digits.slice(0, digits.length + i).concat(swapper(digits.slice(i), i + digits.length)).join(''));
    }
  }
  
  return -1;
}

function swapper(arr, remaining) {
  const [first, second] = [arr[0], arr[1]];
  const sortedArr = arr.sort((a,z) => +z - +a);
  const nextSmallest = sortedArr.splice(sortedArr.indexOf(sortedArr.filter(num => num < first)[0]), 1);

  if (first <= second || (second === '0' && remaining === 0 && nextSmallest[0] === '0')) {
    return false;
  } else {
    return nextSmallest.concat(sortedArr);
  }
}
