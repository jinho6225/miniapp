let numbers = document.querySelectorAll('.num')
const field = document.querySelector('.field')
const equal = document.querySelector('.equal')
let operator = document.querySelectorAll('.operator')
const reset = document.querySelector('.reset')
let activeClass = document.querySelectorAll('.active')

function numberHandle(e) {
    const num = e.target.innerHTML
    if(field.innerHTML == 0) {
        field.innerHTML = num
    } else {
        field.innerHTML += num
    }
}
function numberFn() {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', numberHandle)
    }
}
function init() {
    numberFn()
}

init()