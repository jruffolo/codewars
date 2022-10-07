function stat(strg) {
  if (strg.length === 0) return '';
  
  const runners = strg.split(', ');
  if (runners.length === 1) return `Range: 00|00|00 Average: ${strg.padStart(8, '0')} Median: ${strg.padStart(8, '0')}`;
  
  const hms = runners.map(runner => runner.split('|').map(s => Number(s)));
  const secs = hms.map(arr => (arr[0] * 3600) + (arr[1] * 60) + arr[2]).sort((v1, v2) => v1 - v2);
  
  const range = secs[secs.length - 1] - secs[0];
  const avg = Math.trunc(secs.reduce((sum, n) => sum + n, 0) / secs.length);
  const median = secs.length % 2 === 1 ? 
                 secs[(secs.length - 1) / 2] : 
                 Math.trunc((secs[secs.length / 2] + secs[(secs.length / 2) - 1]) / 2);
 
  return `Range: ${secsToHms(range)} Average: ${secsToHms(avg)} Median: ${secsToHms(median)}`;
}

function secsToHms (secs) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs - (h * 3600)) / 60);
  const s = secs - h*3600 - m*60;
  return `${String(h).padStart(2, '0')}|${String(m).padStart(2, '0')}|${String(s).padStart(2, '0')}`;
}
