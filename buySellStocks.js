// Buy sell stocks at maximum profit.
// Input: prices = [7, 1, 5, 3, 6, 4] => 5
// Input: prices = [7, 6, 4, 3, 1] => 0

// Worst-time complexity

// function maxProfit(prices){
//     let globalProfit = 0;
//     for (let i = 0; i < prices.length-1; i++) {
//         for (let j = i+1; j < prices.length; j++){
//             let currentProfit = prices[j] - prices[i];
//             if(currentProfit > globalProfit) globalProfit = currentProfit;
//         }
//     }
//     return globalProfit;
// }
// console.log(maxProfit([7, 6, 4, 3, 1]));

// Greedy algorithm

function maxProfit(prices){
    let profit = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if(profit < prices[i]-min){ //0<1-7=-6 => 0<5-1=4 => 4<3-1=4 => 4<6-1=5 => 5<4-1
            profit = prices[i]-min; //4=>5
        }
        min = prices[i]< min ? prices[i] : min; // 1<7=1 => 5<1=1 => 3<1=1 => 6<1=1 => 4<1=1
    }
    return profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// min => 7 => 1
// profit => 0 => 1-7=-6 => 5-1=4 => 3-1=2 => 6-1=5 => 4-1=3
