function checkStatus(a, b, c) {
    l=[a,b,c]
    for (let i = 0; i < l.length; i++) {
        if (typeof(l[i])==='string'){
            var s=l[i]
        }
        else if (typeof(l[i])==='number'){
            var n =l[i]
        }
        else if (typeof(l[i])==='boolean'){
            var x=l[i]
        }
    }
    if (x){
        console.log(`Hello ${s}, Your Age Is ${n}, You Are Available For Hire`)
    }
    else{
        console.log(`Hello ${s}, Your Age Is ${n}, You Are Not Available For Hire`)
    }
    }
    
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"