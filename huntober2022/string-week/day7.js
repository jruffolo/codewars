function oppositeLetter(char) {
  const code = char.charCodeAt(0);
  let base, conversion;
  
  if (code >= 65 && code <= 90) {
    base = 65;
    conversion = 122;
  } else if (code >= 97 && code <= 122) {
    base = 97;
    conversion = 90;
  } else {
    return char;
  }

  return String.fromCharCode(conversion - (code - base));
}

function oppositeString(str) {
  return str.split('').map(c => oppositeLetter(c)).join('');
}

console.log(oppositeString('sfmglyvi 1 DVVP WLDM. #100wVEH dv tl tvg!!'));
