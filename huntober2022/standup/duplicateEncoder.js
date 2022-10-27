function duplicateEncoder(str) {
  return str.toLowerCase()
            .split('')
            .map(c => str.indexOf(c) === str.lastIndexOf(c) ? '(' : ')')
            .join('');
}

console.log(duplicateEncoder('din'), '(((');
console.log(duplicateEncoder('recede'), '()()()');
console.log(duplicateEncoder('Success'), ')())())');
console.log(duplicateEncoder('(( @'), '))((');