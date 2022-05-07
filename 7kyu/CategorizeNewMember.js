function openOrSenior(data){
    let output = [];
    for (const member of data) {
      if (member[0] >= 55 && member[1] > 7) output.push('Senior');
      else output.push('Open');
    }
    
    return output;
  }