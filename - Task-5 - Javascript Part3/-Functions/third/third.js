function ageInTime(theAge) {
    if (theAge<10||theAge>100){
        console.log(`Age Out Of Range`)
        return
    }
    console.log(`Months Example => ${theAge*12} Months`)
    console.log(`Weeks Example => ${theAge*12*4} Weeks`)
    console.log(`Days Example => ${theAge*12*4*7} Days`)
    console.log(`Hours => ${theAge*12*4*7*24} Hours`)
    console.log(`Minutes => ${theAge*12*4*7*24*60} Minutes`)
    console.log(`Second => ${theAge*12*4*7*24*60*60} Second`)
    }
    
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months