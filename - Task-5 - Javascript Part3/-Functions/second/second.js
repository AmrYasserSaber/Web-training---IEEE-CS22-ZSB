function calculate(firstNum, secondNum, operation) {
    if (secondNum===undefined){
        console.log(`${operation}`)
        return
    }
    if (operation===undefined){
        console.log(firstNum+secondNum)
        return
    }
    if (operation==="add"){
        console.log(firstNum+secondNum)
        return
    }
    if (operation==='subtract'){
        console.log(firstNum-secondNum)
        return
    }
    if (operation==='multiply'){
        console.log(firstNum*secondNum)
        return
    }
    }
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600