let numbers = document.querySelectorAll('.num')
const field = document.querySelector('.field')
let operator = document.querySelectorAll('.operator')
const reset = document.querySelector('.reset')

function operatorHandleChange(e) {
    const target = e.target
    const operator = target.innerHTML
    console.log(operator)
    //if clicked operator, 
    //then number on field need to be stored at some place
    //and need to check which operator
}

function numHandleChange(e) {
    const target = e.target
    const number = target.innerHTML
    if (field.innerHTML == 0) {
        field.innerHTML = number
    } else {
        field.innerHTML += number
    }
}
function numberFn() {
    numbers = Array.from(numbers)
    operator = Array.from(operator)
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', numHandleChange)
    }
    for (let i = 0; i < operator.length; i++) {
        operator[i].addEventListener('click', operatorHandleChange)
    }
}

function resetHandler() {
    field.innerHTML = 0;
    //clear storage
}

function init() {
    numberFn()
    reset.addEventListener('click', resetHandler)
}

init()