let numbers = document.querySelectorAll('.num')
const field = document.querySelector('.field')
const equal = document.querySelector('.equal')
let operators = document.querySelectorAll('.operator')
const reset = document.querySelector('.reset')
let operator = null
let numA = null
let numB = null
let storeNumber = ''
let result = null

function numberHandler(e) {
    const num = e.target.innerHTML
    if(field.innerHTML == 0) {
        storeNumber = num
    } else {
        storeNumber += num
    }
    numA = storeNumber
    field.innerHTML = numA
}

function resetHandler() {
    field.innerHTML = 0
    numA = null
    numB = null
    storeNumber = ''
    operator = null
    result = null
}

function operatorHandler(e) {
    operator = e.target.innerHTML    
    numB = numA
    numA = null
    storeNumber = ''
}

function equalHandler() {
    const expr = operator;
    switch (expr) {
    case '+':
        result = Number(numB) + Number(numA)
        break;
    case '-':
        result = Number(numB) - Number(numA)
        break;
    case '*':
        result = Number(numB) * Number(numA)
        break;
    case '/':
        result = Number(numB) / Number(numA)
        break;
    default:
        result = 0
    }
    field.innerHTML = result
}






function eventProvider() {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', numberHandler)
    }
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', operatorHandler)
    }
    reset.addEventListener('click', resetHandler)
    equal.addEventListener('click', equalHandler)
}

function init() {
    eventProvider()
}

init()