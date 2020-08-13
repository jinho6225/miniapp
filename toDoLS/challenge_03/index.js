let numbers = document.querySelectorAll('.num')
const field = document.querySelector('.field')
const equal = document.querySelector('.equal')
let operator = document.querySelectorAll('.operator')
const reset = document.querySelector('.reset')
let numA = null
let numB = null
let operatorA = null
let result = null


function operatorHandleChange(e) {
    const target = e.target
    const operator = target.innerHTML
        if (numB && numA) {
            switch (operator) {
                case '+':
                    result = Number(numB) + Number(numA);
                    break;
                case '-':
                    result = Number(numB) - Number(numA);
                    break;
                case '*':
                    result = Number(numB) * Number(numA);
                    break;
                case '/':
                    result = Number(numB) / Number(numA);
                    break;
                default:
                    result = 0;
                }
                field.innerHTML = result;
                numB = result
                numA = null
                operatorA = operator
        } else {
            numB = numA
            numA = null
            operatorA = operator
        }
}

function numHandleChange(e) {
    const target = e.target
    const number = target.innerHTML
    if (numA === null) {
        numA = number
    } else {
        if (numA == 0) {
            numA = number
        } else {
            numA += number
        }
    }
    field.innerHTML = numA
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
    numA = null
    numB = null
    operatorA = null
    result = null
}

function equalHandler() {
    if (result) {
        console.log('heyhe')
        numB = result
    }
    switch (operatorA) {
    case '+':
        result = Number(numB) + Number(numA);
        break;
    case '-':
        result = Number(numB) - Number(numA);
        break;
    case '*':
        result = Number(numB) * Number(numA);
        break;
    case '/':
        result = Number(numB) / Number(numA);
        break;
    default:
        result = 0;
    }
    field.innerHTML = result;
}

function init() {
    numberFn()
    reset.addEventListener('click', resetHandler)
    equal.addEventListener('click', equalHandler)
}

init()