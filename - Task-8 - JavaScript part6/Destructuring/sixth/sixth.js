let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
let t,a,av,s;
if (chosen===1){
    [{title:t,age:a,available:av,skills:[,s]}]=myFriends
}
if (chosen===2){
    [ , {title:t,age:a,available:av,skills:[,s]}]=myFriends
}
if (chosen===3){
    [,,{title:t,age:a,available:av,skills:[,s]}]=myFriends
}
console.log(t,a,av?"available":"unavailable",s)
