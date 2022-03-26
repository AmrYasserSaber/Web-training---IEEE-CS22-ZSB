var allElems=document.body.querySelectorAll('img')
for (var i = 0; i < allElems.length; i++) {
    if (allElems[i].getAttribute("alt")){
        allElems[i].setAttribute("alt","Old")
    }
    else{
        allElems[i].setAttribute("alt", "Elzero New")
    }
}