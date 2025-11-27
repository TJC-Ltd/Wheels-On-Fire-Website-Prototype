const form = document.getElementById('forminfo');
const firstnamefield = document.getElementById('fname');
const secondnamefield = document.getElementById('sname');
const phonenumberfield = document.getElementById('phonenum');
const emailfield = document.getElementById('email');
const queryfield = document.getElementById('Query');
const charCounter = document.getElementById('charCounter');

function isEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}

function isPhoneNumber(value) {
    const numberregex = /^\d{7,15}$/;
    return numberregex.test(value);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstnameValue = firstnamefield.value;
    const secondnameValue = secondnamefield.value;
    const phonenumValue = phonenumberfield.value;
    const emailValue = emailfield.value;
    const queryValue = queryfield.value;

    if (!isEmail(emailValue)) {
        alert("Invalid email");
        return;
    }

    if (!isPhoneNumber(phonenumValue)) {
        alert("Invalid phone number");
        return;
    }

    if (queryValue.length > 300) {
        alert("Your query must be 300 characters or less.");
        return;
    }

    alert("Form submitted successfully!");
});


queryfield.addEventListener('input', function () {
    const length = queryfield.value.length;
    charCounter.textContent = `${length} / 300`;
});

