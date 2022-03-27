<<<<<<< HEAD
function specialMix(...data) {
    s=0
    for (var i =0; i<data.length;i++){
        let t =parseInt(data[i])
        if (!isNaN(t)){
            s+=parseInt(data[i])
        }
    }
    if (s===0){
        return(` All Is Strings`)
    }
    else{
        return(s)
    }
    }

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
=======
function specialMix(...data) {
    s=0
    for (var i =0; i<data.length;i++){
        let t =parseInt(data[i])
        if (!isNaN(t)){
            s+=parseInt(data[i])
        }
    }
    if (s===0){
        return(` All Is Strings`)
    }
    else{
        return(s)
    }
    }

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
>>>>>>> 222345c6af824ba7d2d2f304bbe2cfb95e1bfae3
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings