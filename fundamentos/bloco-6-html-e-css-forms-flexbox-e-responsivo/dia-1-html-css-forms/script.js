const button = document.querySelector("#btn")

function defaultButton(event) {
    event.preventDefault();
}

button.addEventListener('click', defaultButton)