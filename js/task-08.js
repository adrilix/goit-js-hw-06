
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.element;

    console.log(formElements);

    const formData = {
        email: event.target.elements.email.value,
        password: event.target.elements.password.value
    };

    console.log(formData);

    if (formData.email !== "" &&  formData.password !== ""){
        form.reset()
    }  
    else {
        alert(`попередження ! всі поля повинні бути заповнені`)
    };
}