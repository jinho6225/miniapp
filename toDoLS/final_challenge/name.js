const LS_KEY = "name";
const name = document.querySelector(".name");

function saveName(text) {
  localStorage.setItem(LS_KEY, text);
}

function loadName() {
  const cur = localStorage.getItem(LS_KEY);
  if (cur === null) {
    name.addEventListener("change", () => {
      const result = document.querySelector(".name").value;
      saveName(result);
    });
  } else {
    name.value = cur;
  }
}

function init() {
    loadName();
}

init();
