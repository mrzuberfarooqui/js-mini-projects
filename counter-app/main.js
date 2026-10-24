let count = document.getElementById("count")

let minus = document.getElementById("minus")
let reset = document.getElementById("reset")
let plus = document.getElementById("plus")

let counts = 0;

minus.addEventListener("click", () => {
    counts--
    count.textContent = counts
})

reset.addEventListener("click", () => {
    counts = 0
    count.textContent = counts
})

plus.addEventListener("click", () => {
    counts++
    count.textContent = counts
})