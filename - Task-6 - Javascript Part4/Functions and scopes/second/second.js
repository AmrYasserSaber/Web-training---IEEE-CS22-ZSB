<<<<<<< HEAD
function itsMe() {
    return `Iam A Normal Function`;
    }
console.log(itsMe()); // Iam A Normal Function


let itsMe1 =() => `Iam A Arrow Function`
console.log(itsMe1()); // Iam A Arrow Function


function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
    }
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


let urlCreate1 = (protocol,web,tld) =>`${protocol}://www.${web}.${tld}`;
=======
function itsMe() {
    return `Iam A Normal Function`;
    }
console.log(itsMe()); // Iam A Normal Function


let itsMe1 =() => `Iam A Arrow Function`
console.log(itsMe1()); // Iam A Arrow Function


function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
    }
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


let urlCreate1 = (protocol,web,tld) =>`${protocol}://www.${web}.${tld}`;
>>>>>>> 222345c6af824ba7d2d2f304bbe2cfb95e1bfae3
console.log(urlCreate1("https", "elzero", "org"));// https://www.elzero.org