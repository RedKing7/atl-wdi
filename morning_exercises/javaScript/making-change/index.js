// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///
//[qu,di,ni,pe]
var makeChange = function(price, payment) {
  if(price > payment)
    return [0,0,0,0];
  let den = arguments[2] || [25,10,5,1];
  let left = Math.round((payment - price)*100);

  let answer = [];
  den.forEach(function(coin) {
    let numCoins = Math.floor(left / coin);
    left -= coin * numCoins;
    answer.push(numCoins);
  });
  return answer;
/*
  let quarters = Math.floor(cents/25);
  cents = cents - (quarters * 25);
  let dimes = Math.floor(cents/10);
  cents = cents - (dimes * 10);
  let nickels = Math.floor(cents/5);
  cents = cents - (nickels * 5);
  return [quarters, dimes, nickels, cents];
*/
};

console.log(makeChange(5.39, 6.00, [25, 10, 5, 1]));

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
