var input = document.getElementById("input")
var add = document.getElementById("add")
var section = document.getElementById("view__section")
var remove = document.querySelector("remove")

add.addEventListener("click", function () {
    var element = document.createElement("div")
    element.classList.add("todo--pop")
    element.innerHTML = "<p class='p-2 font-bold text-white'>" + input.value + "</p>" + " " + "<button class='border-black m-2 pr-5 pl-5 p-2 rounded-md border-2 bg-white' onclick='del(event)'>Remove</button></div>"
    section.append(element)
})

function del(event) {
    event.target.parentElement.remove()
}