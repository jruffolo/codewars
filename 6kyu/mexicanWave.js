function wave(str){
  let strArr = str.split('');
  let wave = [];
  for (let i = 0; i < str.length; i++) {
    if (strArr[i] === ' ') continue;
    let waveArr = Array.from(strArr);
    waveArr[i] = waveArr[i].toUpperCase();
    wave.push(waveArr.join(''));
  }
  
  return wave;
}
