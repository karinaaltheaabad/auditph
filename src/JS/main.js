const firstName = document.getElementById("firstName");
const lastName = document.getElementsByName("lastName");
const email = document.getElementsByName("email");
const message = document.getElementsByName("message");

const form = document.getElementById("contact-form");

const green = '#2ecc71';
const red = '#e74c3c';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkField(); 
})

function checkField() {
    const firstname = firstName.value.trim();
    const lastname = lastName.value.trim(); 
    const mail = email.value.trim(); 
    const messagefield = message.value.trim(); 

    if (isEmpty(firstname)) {
        setError(firstname, 'First Name cannot be blank');
    } else {
        setSuccess(firstName);
    }
}

function isValid()  {
    if (isEmpty(firstName)) {
        document.getElementsByClassName('helper-text').innerHTML = 'First Name cannot be empty';
    }
}

function isEmpty(field) {
    if (field === '') {
        return true;
    } else {
        return false; 
    }
}

function setError(field, message) {
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');

    small.innerText = message; 

    formControl.className = 'contact-form error';
}

function setSuccess(field) {
    const formControl = input.parentElement; 
    formControl.className = 'form-control success'
}