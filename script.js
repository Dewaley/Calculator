let number = document.querySelectorAll(".number")
let curr = document.querySelector(".current")


window.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList.contains("number")) {
        console.log(number);
    }
    if (target.classList.contains("clear")) {
        curr.innerHTML = "0"
        current = ""
    }
})
