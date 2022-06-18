function scramble(str1, str2) {
  const count = str2.split('').reduce((obj, char) => {
    if (!obj[char]) obj[char] = 1;
    else obj[char]++;
    return obj;
  }, {});
  
  for (const char of str1) {
    if (count[char] && count[char] !== 0) count[char]--;
  }
  
  for (const key in count) {
    if (count[key] !== 0) return false;
  }
  
  return true;
}

// function scramble(str1, str2) {
//   let arr1 = str1.split('');
//   for (const char of str2) {
//     const index = arr1.indexOf(char);
//     if (index === -1) return false;
//     else arr1.splice(index, 1);
//   }
  
//   return true;
// }

// function scramble(str1, str2) {
//   for (const char of str2) {
//     const index = str1.indexOf(char);
//     if (index === -1) return false;
//     else {
//       str1 = str1.slice(0, index) + str1.slice(index + 1, str1.length);
//     }
//   }
  
//   return true;
// }

// function scramble(str1, str2) {
//   let set1 = new Set(str1);
//   for (const char of str2) {
//     if (!set1.has(char)) return false;
//   }
  
//   let obj1 = str1.split('').reduce((obj, char) => {
//     if (!obj[char]) {
//       obj[char] = 1;
//     } else {
//       obj[char]++;
//     }
    
//     return obj;
//   }, {});
  
//   let obj2 = str2.split('').reduce((obj, char) => {
//     if (!obj[char]) {
//       obj[char] = 1;
//     } else {
//       obj[char]++;
//     }
    
//     return obj;
//   }, {});
  
//   for (const key in obj2) {
//     if (obj2[key] > obj1[key]) return false;
//   }
  
//   return true;
// }

// function scramble(str1, str2) {
//   let set1 = new Set(str1);
  
//   for (const char of str2) {
//     if (!set1.has(char)) return false;
// //     if (arr1.indexOf(char) === -1) return false;
// //     else arr1.splice(arr1.indexOf(char), 1);
//   }
  
//   let obj1 = str1.split('').reduce((obj, char) => {
//     if (!obj[char]) {
//       obj[char] = 1;
//     } else {
//       obj[char]++;
//     }
    
//     return obj;
//   }, {});
  
//   for (const char of str2) {
//     obj1[char]--;
//   }
  
//   return Object.values(obj1).filter(num => num < 0).length ? false : true;
// }


// PREP
// Parameters: two strings of all lowercase letters, str1 will be a "letter bank" and str2 will be the word we need to make

// Returns: boolean which represents whether or not we can make str2 with the unique characters in str1

// Examples: "corkophpqs", "porkchops" --> true || "levib", "believe" --> false (not enough letters)

// Pseudocode: initial pass, create a set for str1 - only proceed of set1 has all values needed to build set2
//             secondary pass, for each character of strArr2, get indexOf and splice equivalent char from str1
//             if indexOf returns -1, then false, else true
