<<<<<<< HEAD
console.log(`hi`) 
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
function TakeString (ele){
    if (typeof(ele)=='string'){return(ele)}
    else{return("")}
    }
let NewArray=mix.map(function(ele)  {
    return typeof(ele)=='string'?ele:""}).join("")

console.log(NewArray)

=======
console.log(`hi`) 
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
function TakeString (ele){
    if (typeof(ele)=='string'){return(ele)}
    else{return("")}
    }
let NewArray=mix.map(function(ele)  {
    return typeof(ele)=='string'?ele:""}).join("")

console.log(NewArray)

>>>>>>> 222345c6af824ba7d2d2f304bbe2cfb95e1bfae3
