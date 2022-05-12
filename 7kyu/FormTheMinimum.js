function minValue(values){
  let set = new Set(values);
  let result = [...set.values()];
  
  return Number(result.sort((a, z) => a - z).join(''));
}
