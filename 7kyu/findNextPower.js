function findNextPower(val, pow_) {
  const root = Math.floor(Math.pow(val, 1 / pow_));
  const nextPower = Math.pow(root + 1, pow_);

  return nextPower > val ? nextPower : Math.pow(root + 2, pow_); 
}
