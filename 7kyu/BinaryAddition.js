function addBinary(a,b) {
    // The Number object's .toString() takes an optional radix argument from 2-36 which converts to a given base
    return (a+b).toString(2);
  }