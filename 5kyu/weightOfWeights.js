function orderWeight(string) {
  const addDigits = str => str.split('').reduce((sum, dig) => sum + +dig, 0);
  return string
          .split(' ')
          .filter(entry => entry !== ' ')
          .map(weight => [weight, addDigits(weight)])
          .sort(([w1, ww1], [w2, ww2]) => {
            // if weight of weights are equal, resort to alphabetical sort
            if (ww1 === ww2) {
              if (w1 > w2) return 1;
              else return -1;
            }
            else {
              return ww1 - ww2;
            }
          })
          .map(arr => arr[0]).join(' ');
}

// PREP
// Parameters: A string of positive integers separated by any number of whitespaces

// Returns: A string of those positive integers sorted by their "weight" which is the sum of their digits, separated by spaces
//          note: when two numbers have the same weight, order them as a string, i.e. 123 comes before 99

// Examples: "123 76 85 154" --> 6, 13, 13, 10 --> 6 10 (13 13)* --> "123 154 76 85"
//            *since weights are the same, sort alphabetically

// Pseudocode: split string by ' ' --> filter by !== ' ', should just get numbers
//             map to [weight, weight of weight] --> sort by either WoW or alpha if WoWs are equal
//             map arr to arr[0] (remove WoW) and join with ' '
