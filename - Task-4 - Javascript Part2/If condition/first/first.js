// Test Case 1
let num1 = 9; // "009"

// Test Case 2
let num2 = 20; // "020"

// Test Case 3
let num3 = 110; // "110"

if (num<10){
    console.log(`00${num}`)
}
else if(num>10&&num<100){
    console.log(`0${num}`)
}
else{
    console.log(num)
}