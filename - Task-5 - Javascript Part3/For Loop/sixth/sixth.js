let start = 0;
let swappedName = "elZerO";
for (const i in swappedName) {
    if (i.toUpperCase() === i) {
        swappedName.replace(i,i.toLowerCase);
      } else {
        swappedName.replace(i,i.toUpperCase);
      }
}
console.log(`"${swappedName}"`)
// Output
"ELzERo"