// тема : функции
// declaration
function name() {
    console.log("date declarations")
}
name1()

// expression
let name = function() {
    console.log("done expression")
}
name2()

// arrow
let name = () => {
    console.log("done arrow")
}
name3()

let btn = document.querySelector("#btn")
let btn2 = document.querySelector("#btn")

btn.onclick = function(){
    // alert("salam 123")
    document.body.style.background = "liner-gradient(to reight, red, blue"
}

btn2.onclick = function(){
    // alert("salam 123")
    document.body.style.background = "white"
}