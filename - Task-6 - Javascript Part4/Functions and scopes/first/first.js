<<<<<<< HEAD
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        const arr = zName.split(" ");
        arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1); 
        arr[1] = arr[1].charAt(0).toUpperCase(); 
    const str2 = arr.join(" ");
    return(str2)
    }
    function ageWithMessage(zAge) {
        n=zAge.split(" ")[0]
        return(` Your Age Is ${n}`)
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        b=zCountry.slice(0,2).toUpperCase()
        return(` You Live In ${b}`)
      // Egypt => You Live In EG
      // Syria => You Live In SY
    }
    function fullDetails() {
        return(` Hello `+namePattern(zName)+`,`+ageWithMessage(zAge)+`,`+countryTwoLetters(zCountry))
    }
    return fullDetails(); // Do Not Edit This
    }
    console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
    console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
=======
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        const arr = zName.split(" ");
        arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1); 
        arr[1] = arr[1].charAt(0).toUpperCase(); 
    const str2 = arr.join(" ");
    return(str2)
    }
    function ageWithMessage(zAge) {
        n=zAge.split(" ")[0]
        return(` Your Age Is ${n}`)
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        b=zCountry.slice(0,2).toUpperCase()
        return(` You Live In ${b}`)
      // Egypt => You Live In EG
      // Syria => You Live In SY
    }
    function fullDetails() {
        return(` Hello `+namePattern(zName)+`,`+ageWithMessage(zAge)+`,`+countryTwoLetters(zCountry))
    }
    return fullDetails(); // Do Not Edit This
    }
    console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
    console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
>>>>>>> 222345c6af824ba7d2d2f304bbe2cfb95e1bfae3
  // Hello Ahmed A., Your Age Is 32, You Live In SY