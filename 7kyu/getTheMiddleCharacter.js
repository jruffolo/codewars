function getMiddle(s)
{
  let middleIndex;
  if (s.length % 2 === 0) {
    middleIndex = Math.floor((s.length - 1) / 2);
    return s[middleIndex] + s[middleIndex + 1];
  } else {
    middleIndex = (s.length - 1) / 2;
    return s[middleIndex];
  }
}