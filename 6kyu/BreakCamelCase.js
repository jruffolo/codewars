// complete the function
function solution(string) {
    const strArr = string.split('');
    const spaced = strArr.map((char, i) => {
      if (char === char.toUpperCase()) return ' ' + char;
      else return char;
    });
    
    return spaced.join('');
  }