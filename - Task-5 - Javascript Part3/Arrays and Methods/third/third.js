let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr.push(arrTwo.pop(),arrOne.pop(),arrOne.pop(),arrOne.pop(),arrTwo.pop(),arrTwo.pop())
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]