function welcomeMsg(xyz) {
  return "Welcome " + xyz;
}

console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

function calcGrossPrice(netPrice, taxRate) {
  return netPrice + netPrice * taxRate;
}

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

function addPositive(a, b) {
  return Math.abs(a) + Math.abs(b);
}

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9
