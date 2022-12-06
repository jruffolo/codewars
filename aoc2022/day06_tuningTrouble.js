const fs = require('fs');
const input = fs.readFileSync('day06_input.txt', 'utf8');

// PART 1 - find the number of characters that need to be processed to find the first start-of-packet marker in the data stream
//          the start of packet marker is indicated by 4 unique characters (i.e. 'abcd' or 'qfpz' but not 'ajoa')

// initialize a map
let packetMap = new Map();
let a = 0; let b = 0;

for (b; b < input.length; b++) {
  if (b - a > 3) a++;

  if (packetMap.has(input[b])) {
    a = packetMap.get(input[b]);
    b = packetMap.get(input[b]);
    packetMap.clear();
  }

  packetMap.set(input[b], b + 1);
  if (packetMap.size === 4) break;
}

// amount of characters which need to be processed to find the first start-of-packet marker
console.log(packetMap.get(input[b]));

// PART 2 - find the first start-of-message marker (14 unique characters)
let messageMap = new Map();
let x = 0; let y = 0;

for (y; y < input.length; y++) {
  if (y - x > 13) x++;

  if (messageMap.has(input[y])) {
    x = messageMap.get(input[y]);
    y = messageMap.get(input[y]);
    messageMap.clear();
  }

  messageMap.set(input[y], y + 1);
  if (messageMap.size === 14) break;
}

console.log(messageMap.get(input[y]));

// this operation can be generalized as a function
function getPacketOfLength(length, input) {
  let map = new Map();
  let a = 0; let b = 0;

  for (b; b < input.length; b++) {
    if (b - a > length - 1) a++;

    if (map.has(input[b])) {
      a = map.get(input[b]);
      b = map.get(input[b]);
      map.clear();
    }

    map.set(input[b], b + 1);
    if (map.size === length) break;
  }

  return map.get(input[b]);
}

console.log(getPacketOfLength(4, input), getPacketOfLength(14, input));