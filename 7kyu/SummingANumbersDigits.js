function sumDigits(number) {
    const valid = '123456789';
    return number.toString().split('').filter(num => valid.includes(num)).reduce((sum, num) => sum + +num, 0);
  }  