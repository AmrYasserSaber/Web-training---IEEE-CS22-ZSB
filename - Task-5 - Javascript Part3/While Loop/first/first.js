let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
while (counter<friends.length) {
    if (typeof(friends[counter])==="string"){
        if(!friends[counter].startsWith("A")){
            ++index
            console.log(`"${index} => ${friends[counter]}"`)
            
        }
    }
    counter++
}
// Output
//"1 => Sayed"
//"2 => Mahmoud"