function expandedForm(num) {
    // split number into an array of digits
    const numArr = String(num).split('');
    
    // use map to pad each digit (excluding 0) with the amount of 0s for its place value
    // padding is determined by total length of the number minus whatever index our digit is in
    // (i.e. if you have 12345, the 3 digit will be padded to a length of 5 - 2 = 3, resulting in an output of 300)
    
    const mappedArr = numArr.map((num, i) => {
      if (Number(num) === 0) return '';
      else return num.padEnd(numArr.length - i, '0');
    });
    
    // filter out 0s (set to '' in our array) and join our padded digits with ' + ' to form the correct string
    return mappedArr.filter(entry => entry !== '').join(' + ');
  }