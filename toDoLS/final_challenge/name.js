const LS_KEY = "name";
const name = document.querySelector(".name");
const nameField = document.querySelector('.nameField')

function saveName(text) {
    localStorage.setItem(LS_KEY, text);
}

function handleSubmit(e) {
    e.preventDefault()
    const target = e.target
    const result = target.children
    let value = result[0].value
    saveName(value);
    name.classList.add('hidden')
    loadName()
}
function loadName() {
    const cur = localStorage.getItem(LS_KEY);
    if (cur === null) {
        name.addEventListener("submit", handleSubmit)
    } else {
        name.classList.add('hidden')
        nameField.innerHTML = `Hello~${cur}~!`;
    }
}

function init() {
    loadName();
}

init();
