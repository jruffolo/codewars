function leastLarger(a,i) {
  const larger = a.filter(num => num > a[i]);
  return larger.length === 0 ? -1 : a.indexOf(larger.sort((x,y)=>x-y)[0]);
}
