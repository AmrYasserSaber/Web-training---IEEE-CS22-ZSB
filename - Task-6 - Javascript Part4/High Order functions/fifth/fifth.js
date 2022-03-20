let nums = [2, 12, 11, 5, 10, 1, 99];
let num =nums.reduce(function(acc,current,index,arr){
    
    if (current%2===0){return acc*=current}
    else{return acc+=current}
},1)
console.log(num)