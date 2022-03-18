let start = 0;
let swappedName = "elZerO";
var newWord = [];
for (i=0; i<swappedName.length; i++) {
  if (swappedName[i] == swappedName[i].toLowerCase()) {
      newWord[i] = swappedName[i].toUpperCase();
  }
  else {
    newWord[i] = swappedName[i].toLowerCase();
  }
}
console.log(newWord.join(""));
// Output
//"ELzERo"
