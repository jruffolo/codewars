function diagonal(n, p) {
  let triangle = [];

  for (let i = 1; i <= n + 1; i++) {
    let row = [];
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i) {
        row.push(1);
      } else {
        row.push(triangle[i-2][j-2] + triangle[i-2][j-1]);
      }
    }
    triangle.push(row);
  }
  
  let diag = [];
  triangle.slice(p).forEach(row => diag.push(row[p]));

  return diag.reduce((sum, num) => sum + num, 0);
}
