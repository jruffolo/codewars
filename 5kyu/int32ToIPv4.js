function int32ToIp(int32){
  let octets = [ [], [], [], [] ];
  int32.toString(2).padStart(32, 0).split('').forEach((bit, i) => octets[Math.floor(i/8)].push(+bit));
  return octets.map(octet => parseInt(Number(octet.join('')), 2)).join('.');
}
