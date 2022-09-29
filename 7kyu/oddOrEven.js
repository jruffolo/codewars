function oddOrEven(array) {
  return array.reduce((sum, n) => sum + n, 0) % 2 === 0 ? 'even' : 'odd';
}
