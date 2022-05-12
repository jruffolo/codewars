function findNextSquare(sq) {
  const root = Math.sqrt(sq);
  if ( Number.isInteger(root) ) { return (root + 1) ** 2; }
  return -1;
}
