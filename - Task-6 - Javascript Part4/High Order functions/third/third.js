var myArray = ["E", "l", "z", ["e", "r"], "o"];
myArray=myArray.flat()
let newArray=myArray.reduce(function(acc,current,){
    return acc+current;
})
console.log(newArray)