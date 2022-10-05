function solution(input, markers) {
  let res = [];
  let lines = input.split('\n');
  
  for (let line of lines) {
    for (const marker of markers) {
      if (line.indexOf(marker) > -1) {
        res.push(line.substring(0, line.indexOf(marker)).trim());
      }
    }
    
    if (lines.indexOf(line) === res.length) {
      res.push(line);
    }
  }
  
  return res.join('\n');
};
