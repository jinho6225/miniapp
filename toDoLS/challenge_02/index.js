// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const form = document.querySelector('.form')
const range = form.querySelector('.range')
const targetNum = document.querySelector('.targetNum')
const guessBtn = document.querySelector('.guessBtn')
const progress = document.querySelector('.progress')
const result = document.querySelector('.result')

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function paintStatement(num, max) {
    progress.innerHTML = ``
    result.innerHTML = ``
    const p = document.createElement('p')
    const random = getRandomInt(max)
    p.innerHTML = `You chose: ${num}, the machine chose: ${random}.`
    progress.appendChild(p)
    const strong = document.createElement('strong')
    strong.innerHTML = `${num == random ? "You won!" : "You lost!"}`
    result.appendChild(strong)
}

function handleChange(e) {
    let max = e.target.value
    targetNum.innerHTML = max
}

function handleSubmit(e) {
    e.preventDefault()
    const div = e.target.parentNode
    const inputField = div.querySelector('input')
    const inputVal = Number(inputField.value)
    const max = targetNum.innerHTML
    if (inputVal <= Number(max)) {
        paintStatement(inputVal, max)
    }
}

function init(){
    range.addEventListener('change', handleChange)
    guessBtn.addEventListener('click', handleSubmit)
}

init()