function solution(list){
  let res = [];
  let heap = [];
  
  for (const n of list) {
    if (list.includes(n+1)) {
      heap.push(String(n));
    } else if (heap.length >= 2) {
      res.push(`${heap[0]}-${n}`);
      heap = [];
    } else if (heap.length === 1) {
      res.push(heap[0]);
      res.push(String(n));
      heap = [];
    } else {
      res.push(String(n));
    }
  }
  
  return res.join(',');
}
