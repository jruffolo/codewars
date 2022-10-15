// whoops, not an in-place shuffle
function shuffleElements(arr) {
  const outerLength = arr.length;
  const innerLength = arr[0].length;
  const totalLength = outerLength * innerLength;

  arr = arr.flat();
  let randomMap = Array(totalLength);
  let res = [];

  for (let i = 0; i < randomMap.length; i++) {
    while (randomMap[i] === undefined) {
      let randomNum = Math.floor(Math.random() * totalLength);
      if (!randomMap.includes(randomNum)) {
        randomMap[i] = randomNum;
      }
    }
  }

  for (let i = 0; i < outerLength; i++) {
    let out = [];
    for (let j = 0; j < innerLength; j++) {
      out.push(arr[randomMap.shift()]);
    }
    res.push(out);
  }

  return res;
}

// could adapt to 2d array
function fisherYates(array) {
  array = array.flat();

  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

let testArray = [['a', 'b', 'c'], ['X', 'Y', 'Z'], [1, 2, 3]];

console.log(`Test Array: ${testArray}`);
console.log('--- Homemade Shuffle ---');
console.log(shuffleElements(testArray));
console.log(shuffleElements(testArray));
console.log(shuffleElements(testArray));

console.log('\n')
testArray = [['a', 'b', 'c'], ['X', 'Y', 'Z'], [1, 2, 3]];

console.log(`Test Array: ${testArray}`);
console.log('--- Fisher Yates Shuffle ---');
console.log(fisherYates(testArray));
console.log(fisherYates(testArray));
console.log(fisherYates(testArray));
