
const newInput = document.querySelector('#validation-input');

newInput.addEventListener('blur', onInputAll);

function onInputAll(event) {
    const dataLength = newInput.getAttribute('data-length');

    console.log(event.target.value.length);

    if (Number(dataLength) === (event.target.value.length)) {
        newInput.classList.remove('invalid')
        newInput.classList.add('valid')
    } else {
        newInput.classList.remove('valid')
        newInput.classList.add('invalid')
    }
}

