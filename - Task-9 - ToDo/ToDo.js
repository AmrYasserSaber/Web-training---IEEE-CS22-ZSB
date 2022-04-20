var mylist = document.getElementsByTagName("LI");
var ul =document.querySelector("#myUL")
let saver=document.querySelector(".saveBtn")
var close = document.getElementsByClassName("close");
var list = document.querySelector("ul");
let add = document.querySelector(".addBtn");
let lis = [];
let t = [];
let c=[]
let createdlist = [];
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
function newElement(inputValue) {
    var li = document.createElement("li");
    var t = document.createElement("span");
    t.textContent=inputValue
    li.appendChild(t);
    if (inputValue === "") {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createElement("SPAN");
    txt.textContent="\u00D7"
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
    var div = this.parentElement;
    ul.removeChild(div)
    console.log(mylist);
    push;
    };
    
}
}
function store(textlist) {
    window.localStorage.setItem("list content", "");
    window.localStorage.setItem(
    "list content",
    JSON.stringify(removeDuplicates(textlist))
);
}
function GetFromStorage() {
    if (mylist.length == 0) {
        let store = window.localStorage.getItem("list content");
        if (store != "") {
        createdlist = JSON.parse(localStorage.getItem("list content"));
        }
        for (var i = 0; i < createdlist.length; i++) {
        newElement(createdlist[i]);
        }
    }
}
function push (){
    for (var i = 0; i < mylist.length; i++) {
        t.push(mylist[i].firstChild.textContent);
    }
    store(t);
}
if (window.localStorage.getItem("list content") === null) {
    localStorage.setItem("list content", "");
}
for (var i = 0; i < mylist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    mylist[i].appendChild(span);
    }
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        ul.removeChild(div);
        console.log(mylist)
        push
    };
    }

list.addEventListener("click", function (checked) {
if (checked.target.tagName === "LI") {
    checked.target.classList.toggle("checked");
}
});
add.addEventListener("click", function () {
newElement(document.getElementById("myInput").value);
});
window.addEventListener("load", GetFromStorage);
add.addEventListener("click", push);
saver.onclick=push;