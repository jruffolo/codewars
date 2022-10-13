let myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy'];

function moveAround(arr) {
  return arr.filter(str => str.includes('a'))
            .concat(arr.filter(str => !str.includes('a') && str.length < 4))
            .concat(arr.filter(str => !str.includes('a') && str.length > 3));
}

function moveAroundLessMethods(arr) {
  let hasA = [];
  let short = [];
  let long = [];

  strings:
  for (const str of arr) {
    
    for (const char of str) {
      if (char === 'a') {
        hasA.push(str);
        continue strings;
      }
    }

    str.length < 4 ? short.push(str) : long.push(str);
  }

  return [...hasA, ...short, ...long];
}

console.log(moveAround(myArr));
console.log(moveAroundLessMethods(myArr));
// result should be:
// ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']