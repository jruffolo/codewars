function findDeletedNumber(arr, mixArr) {
  return arr.length !== mixArr.length ? arr.filter(n => !mixArr.includes(n))[0] : 0;
}
