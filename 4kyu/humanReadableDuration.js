function formatDuration (seconds) {
  if (seconds === 0) return 'now';
  
  let yr = 0; let day = 0; let hr = 0; let min = 0; let sec = 0;

  while (seconds >= 31536000) {
    seconds -= 31536000;
    yr++;
  } 
  while (seconds >= 86400) {
    seconds -= 86400;
    day++;
  }
  while (seconds >= 3600) {
    seconds -= 3600;
    hr++;
  }
  while (seconds >= 60) {
    seconds -= 60;
    min++;
  }
  while (seconds > 0) {
    seconds--;
    sec++;
  }
  const plural = (val, unit) => val > 1 ? `${unit}s` : unit;
  
  let time = [[yr, plural(yr, 'year')], 
              [day, plural(day, 'day')], 
              [hr, plural(hr, 'hour')], 
              [min, plural(min, 'minute')], 
              [sec, plural(sec, 'second')]];
  
  let duration = time.filter(arr => arr[0] > 0).map(arr => `${arr[0]} ${arr[1]}`);
  
  if (duration.length > 2) return duration.slice(0, duration.length - 2).join(', ') + ', ' + duration.slice(-2).join(' and ');
  else return duration.join(' and ');
}
