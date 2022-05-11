function diamond(n, str, c, rev){
  // negative numbers and even numbers don't make a diamond!
  if (n <= 0 || n % 2 === 0) return null;
  
  // we need to keep track of our string, where we are in its creation, and whether or not to add/subtract from the count
  let string = str || '';
  let count = c || 1;
  let reverse = rev || false;
  
  // where the magic happens
  string += ' '.repeat((n - count) / 2) + '*'.repeat(count) + '\n';
  
  // if we've made it to the end, or the beginning was the end... we want to return our string
  if ((count === 1 && reverse) || n === 1) {
    return string;
    }

  // well, we're not at the end, so we go again
  // how we add to the count is based on whether or not we've passed the midpoint of our diamond
  if (count === n) reverse = true;
  if (reverse) count -= 2;
  else count += 2;
  
  return diamond(n, string, count, reverse);
}
