/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = 0;
  let maxProfit = 0;
  
  for (let sell = 1; sell < prices.length; sell++) {
    let currProfit = prices[sell] - prices[buy];
    maxProfit = Math.max(maxProfit, currProfit);
    if (currProfit < 0) {
      buy = sell;
    }
  }
    
  return maxProfit;
};
