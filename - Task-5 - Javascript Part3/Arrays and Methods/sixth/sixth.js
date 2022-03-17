let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs.unshift(arr2.pop(),arr1.pop(),arr2.pop())

console.log(allArrs.sort().join("").toLowerCase()); // fxy