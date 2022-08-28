function stringSuffix(s) {
  let total = 0;
  let control = 0;
  let suffix = 0;
  
  while (suffix < s.length) {
    let count = 0;
    
    for (let i = suffix; i < s.length; i++) {
      if (s[control] === s[i]) {
        count++;
        control++;
      } else break;
    }
    
    total += count;
    control = 0;
    suffix += 1;
  }
  
  return total;
}

// PREP
// Parameters: A string containing at least one character

// Returns: The cumulative 'similarity count' of 
//          consectutive string suffixes compared to the original string

// Examples: 'ababo' --> 'ababo' 5 + 'babo' 0 + 'abo' 2 + 'bo' 0 + 'o' 0 = 7

// Pseudocode: 
// We don't know how many comparisons we will ultimately make,
// but let's say we have two indices, control and suffix
// 
// Each time we encounter a match, we increment our count and both indices
// Whenever we encounter a non-match, we reset control to 0 and increment suffix by 1
// i.e. 0 = 0 match 1 = 1 match 2 != 2 no match --> 0 = 1 match 1 != 2 no match --> 0 = 2... etc
// 
// So we can use nested loops:
// control = 0, suffix = 0, total = 0
// While suffix <= string.length
//  count = 0
//    for (i = suffix, i < string.length, i++)
//        if str[control] = str[suffix]
//          count++
//          suffix++
//        else break
//   total += count
//   count = 0
//   suffix += 1
