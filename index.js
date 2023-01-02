// var text = prompt("What do you want to write")
var Changenumvar = document.getElementById("numchange")
var start = document.getElementById("start")
var test = document.getElementById("test")
var num = document.getElementById("num")
var text = "Røyken Videregående Skole"
start.onclick = function start() {
    Changenumvar.setAttribute("class", "hidden")
    if (num.value >= 1) {
        if (num.value <= 5) {
            var i = 0
            test.innerText = ""
            var split = text.split("")
            repeat()
            function repeat() {
                if (i <= text.length - 1) {
                    test.innerHTML = test.innerHTML + split[i]
                    i++
                    setTimeout(repeat, num.value * 50,)
                } else {
                }
            }
        } else {
            changenum()
        }
    } else {
        changenum()
    }
}
function changenum() {
    Changenumvar.setAttribute("class", "red")
}