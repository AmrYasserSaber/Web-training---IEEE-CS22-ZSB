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
});