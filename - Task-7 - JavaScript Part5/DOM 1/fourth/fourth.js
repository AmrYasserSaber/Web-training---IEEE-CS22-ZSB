let first = document.getElementsByTagName("div")[0]
let second = document.getElementsByTagName("div")[1]
document.getElementsByTagName("div")[0].setAttribute("class",document.getElementsByTagName("div")[0].getAttribute("title"))
document.getElementsByTagName("div")[1].setAttribute("class",document.getElementsByTagName("div")[1].getAttribute("title"))
console.log(first)
console.log(second)
