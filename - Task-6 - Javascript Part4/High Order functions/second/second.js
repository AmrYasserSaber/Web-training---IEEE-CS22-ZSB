let myString = "EElllzzzzzzzeroo";

NewArray=myString.split("").filter(function(ele, index, self) {
        return self.indexOf(ele) == index;
        }).join('');

console.log(NewArray)
