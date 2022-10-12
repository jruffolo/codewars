let myArray = ['abc', 'xyz', 1, 2, 'Hey!'];

function moveLeft(entry, arr) {
  const index = arr.indexOf(entry);
  if (index > 0) {
    arr[index] = arr[index - 1];
    arr[index - 1] = entry;
  }
}

function moveRight(entry, arr) {
  const index = arr.indexOf(entry);
  if (index < arr.length - 1) {
    arr[index] = arr[index + 1];
    arr[index + 1] = entry;
  }
}

console.log(myArray);

moveLeft('xyz', myArray);
console.log(myArray);

moveLeft('xyz', myArray);
console.log(myArray);

moveRight(2, myArray);
console.log(myArray);

moveRight(2, myArray);
console.log(myArray);