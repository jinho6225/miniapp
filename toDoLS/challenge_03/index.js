let numbers = document.querySelectorAll('.num')
const field = document.querySelector('.field')


function handleChange(e) {
    const target = e.target
    const number = target.innerHTML
    field.innerHTML += number
    console.log(field.innerHTML)
}
function numberFn() {
    numbers = Array.from(numbers)
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', handleChange)
    }
}

function init() {
    numberFn()
}

init()