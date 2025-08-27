let markHome = 0
let markGuest = 0
let homeEl = document.getElementById("mark-home")
let guestEL = document.getElementById("mark-guest")

function add1H(){
    markHome += 1
    console.log(markHome)
    homeEl.textContent = markHome
}

function add2H(){
    markHome += 2
    homeEl.textContent = markHome
}

function add3H(){
    markHome += 3
    homeEl.textContent = markHome
}

function add1G(){
    markGuest += 1
    guestEL.textContent = markGuest
}

function add2G(){
    markGuest += 1
    guestEL.textContent = markGuest
}

function add3G(){
    markGuest += 1
    guestEL.textContent = markGuest
}