function recycle(garbage) {
  let bins = {'paper': [], 'glass': [], 'organic': [], 'plastic': []};
  
  for (const item of garbage) {
    bins[item.material].push(item.type);
    if (item.secondMaterial) bins[item.secondMaterial].push(item.type);
  }
  
  return Object.values(bins);
}
