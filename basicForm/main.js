const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const number = document.getElementById('number');
const photo = document.getElementById('photo');
const checkbox_1 = document.getElementById('checkbox_1');
const checkbox_2 = document.getElementById('checkbox_2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

const checkInputs = () => {
	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const numberValue = number.value.trim();
	
	if (nameValue === '') {
		setInputError(name, 'To pole jest wymagane.');
	} else {
		removeInputError(name);
	}
	
	if (emailValue === '') {
		setInputError(email, 'To pole jest wymagane.');
	} else if (!isEmail(emailValue)) {
		setInputError(email, 'Niepoprawny e-mail');
	} else {
		removeInputError(email);
	}
	
	if (phoneValue === '') {
		setInputError(phone, 'To pole jest wymagane.');
	} else {
		removeInputError(phone);
	}
	
    if (numberValue === '') {
		setInputError(number, 'To pole jest wymagane.');
    } else if (numberValue.length < 4) {
        setInputError(number, 'Numer musi zawierać co najmniej 4 cyfry.');
    } else if (numberValue.length > 6) {
        setInputError(number, 'Numer musi zawierać maksymalnie 6 cyfr.');
    } else {
		removeInputError(number);
	}
}

const setInputError = (input, message) => {
	const formControl = input.parentElement;
	const errorText = formControl.querySelector('p');
	formControl.classList.add('error');
	errorText.innerText = message;
}
const removeInputError = (input) => {
	const formControl = input.parentElement;
	formControl.classList.remove('error');
}
	
const isEmail = (email) => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
