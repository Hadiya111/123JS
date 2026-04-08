let minus = document.getElementById("minus")
let count = document.getElementById("count")
let plus = document.getElementById("plus")
let reset = document.getElementById("reset")
let mul = document.getElementById("mul")

value = 0

plus.onclick = function() {
     
    value++
    count.innerHTML = value
}

minus.onclick = function() {
    if(value > 0)
    value--
    count.innerHTML = value
}

reset.onclick = function() {
    value = 0
    count.innerHTML = value
}

mul.onclick = function () {
    let name = promt("san jaz")
    value += name
    count.innerHTML = value
}
