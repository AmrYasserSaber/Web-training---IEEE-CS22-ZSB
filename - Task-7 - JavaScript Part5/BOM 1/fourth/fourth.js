let div = document.querySelector(".num")

function e() {
    div.innerHTML -= 1;
    if (div.innerHTML === "5") {
        location.href = "https://elzero.org/"
    }
}
let counter = setInterval(e, 1000);