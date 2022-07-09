function last(x){
  return x.split(' ').sort((a, z) => {
    const lastA = a.slice(-1);
    const lastZ = z.slice(-1);
    
    return lastA > lastZ ? 1 : lastA < lastZ ? -1 : 0;
  });
}
