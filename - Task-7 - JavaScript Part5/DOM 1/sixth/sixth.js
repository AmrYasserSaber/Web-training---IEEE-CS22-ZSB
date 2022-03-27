<<<<<<< HEAD
var num= document.querySelector('[name="elements"]')
n=0
num.addEventListener('keyup', function (_e) {
    if (num.value ===""){
        n=0
    }
    else {
        n=num.value
    }
});
var inputtext= document.querySelector('[name="texts"]')
txt=""
inputtext.addEventListener('keyup', function (_e) {
    if (inputtext.value =="")txt=""
    else txt=inputtext.value
});
var inputchoose=document.querySelector('[name="type"]')
var buttom=document.querySelector('[name="create"]')
buttom.addEventListener("click", _event => {
    _event.preventDefault()
    var container=document.createElement("div")
    for(i=0;i<n;i++){
        if(inputchoose.value=="div"){
            let div=document.createElement("div")
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.background = "orange";
            div.style.color = "white";
            div.innerHTML=`${txt}`
            container.appendChild(div)
        }
        else{
            let section=document.createElement("section")
            section.innerHTML=`${txt}`
            section.style.width = "100px";
            section.style.height = "100px";
            section.style.background = "red";
            section.style.color = "white";
            container.appendChild(section)
        }
    }
    document.body.appendChild(container)
=======
var num= document.querySelector('[name="elements"]')
n=0
num.addEventListener('keydown', function (_e) {
    if (num.value =="")n=0
    else n=num.value
});
var inputtext= document.querySelector('[name="texts"]')
txt=""
inputtext.addEventListener('keydown', function (_e) {
    if (inputtext.value =="")txt=""
    else txt=inputtext.value
});
var inputchoose=document.querySelector('[name="type"]')
select=""
var buttom=document.querySelector('[name="create"]')
buttom.addEventListener("click", _event => {
    console.log(n)
    console.log(txt)
    console.log(select)
    for(i=0;i<n;i++){
        if(inputchoose.value=="div"){
            let div=document.createElement("div")
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.background = "red";
            div.style.color = "white";
            div.innerHTML=`${txt}`
            document.appendChild(div)
        }
        else{
            let section=document.createElement("section")
            section.innerHTML=`${txt}`
            section.style.width = "100px";
            section.style.height = "100px";
            section.style.background = "red";
            section.style.color = "white";
            document.appendChild(section)
        }
        
    }
>>>>>>> 222345c6af824ba7d2d2f304bbe2cfb95e1bfae3
});