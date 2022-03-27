<<<<<<< HEAD
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let newArray=numsAndStrings.filter(function(ele){
    return !isNaN(parseInt(ele))
}).map(function(ele){return -ele})
=======
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let newArray=numsAndStrings.filter(function(ele){
    return !isNaN(parseInt(ele))
}).map(function(ele){return -ele})
>>>>>>> 222345c6af824ba7d2d2f304bbe2cfb95e1bfae3
console.log(newArray)