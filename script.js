let pointOne = document.getElementById("home-points-text1")
let pointOne2 = document.getElementById("home-points-text2")

let pointHome = 0
function increment1a() {
    pointHome += 1
    pointOne.innerText = pointHome
}

pointGuest = 0
function increment1b() {
    pointGuest += 1
    pointOne2.innerText = pointGuest
}

function increment2a() {
    pointHome += 2
    pointOne.innerText = pointHome
}

function increment2b() {
    pointGuest += 2
    pointOne2.innerText = pointGuest
}

function increment3a() {
    pointHome += 3
    pointOne.innerText = pointHome
}

function increment3b() {
    pointGuest += 3
    pointOne2.innerText = pointGuest
}

function resetButton() {
    pointHome= 0;
    pointGuest= 0;
    pointOne.innerText = pointHome;
    pointOne2.innerText = pointGuest
}