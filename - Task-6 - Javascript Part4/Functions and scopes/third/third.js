<<<<<<< HEAD
function checker(zName) {
    return function (status) {
        return function (salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
        };
    };
    }
console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

let checker1 = (zName,status,salary) => status === "Available" ?`${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
console.log(checker1("Osama","Available",4000)); // My Salary Is 4000
=======
function checker(zName) {
    return function (status) {
        return function (salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
        };
    };
    }
console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

let checker1 = (zName,status,salary) => status === "Available" ?`${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
console.log(checker1("Osama","Available",4000)); // My Salary Is 4000
>>>>>>> 222345c6af824ba7d2d2f304bbe2cfb95e1bfae3
console.log(checker1("Ahmed","Not Available",)); // Iam Not Avaialble