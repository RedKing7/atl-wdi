//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  let sTotal = small*60;
  let lTotal = total-sTotal;
  let lCost = lTotal/large;
  return lCost;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  const circum = 24901;
  let gallons = circum / milesPerGallon;
  return gallons*fuelPrice;
};

//*************************
// Problem 3:
// GROG
                            //3,   20,  2,   55
var calcFruitJuice = function(gCJ, pPC, gKJ, pPK){
  pPC /= 100; //convert to decimal .2
  pPK /= 100; //convert to decimal .55
  let pureC = gCJ*pPC;          //3*.2  = .6
  let pureK = gKJ*pPK;          //2*.55 = 1.1
  let totalPure = pureC + pureK;//1.1 + .6 = 1.7
  let totalJuice = gCJ + gKJ;   //3 + 2 = 5
  return totalPure/totalJuice;  //1.7 / 5 = .34
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
