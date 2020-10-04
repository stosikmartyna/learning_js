const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const number = document.getElementById('number');
const photoInput = document.getElementById('photo');
const photoPreviewWrapper = document.querySelector('.form-image__preview');
const photoDefaultText = document.querySelector('.form-image__preview__text');
const photoImgPreview = document.querySelector('.form-image__preview__img');
const option_1 = document.getElementById('option_1');
const option_2 = document.getElementById('option_2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

photoInput.addEventListener('change', function() {
	const file = this.files[0];

	if (file) {
		const reader = new FileReader();
		
		photoDefaultText.style.display = 'none';
		photoImgPreview.style.display = 'block';

		reader.addEventListener('load', function() {
			photoImgPreview.setAttribute('src', this.result);
		})

		reader.readAsDataURL(file);
	} else {
		photoDefaultText.style.display = 'block';
		photoImgPreview.style.display = 'none';
	}
})

const checkInputs = () => {
	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const numberValue = number.value.trim();
	const isFileUploaded = !!photoInput.files.length;
        
	nameValue === ''
		? setInputError(name, 'To pole jest wymagane.')
		: removeInputError(name)
	
	emailValue === ''
		? setInputError(email, 'To pole jest wymagane.')
		: !isEmail(emailValue)
			? setInputError(email, 'Niepoprawny e-mail')
			: removeInputError(email)
	
	phoneValue === ''
		? setInputError(phone, 'To pole jest wymagane.')
		: removeInputError(phone)
	
    numberValue === ''
		? setInputError(number, 'To pole jest wymagane.')
    	: numberValue.length < 4
        	? setInputError(number, 'Numer musi zawierać co najmniej 4 cyfry.')
    		: numberValue.length > 6
        		? setInputError(number, 'Numer musi zawierać maksymalnie 6 cyfr.')
				: removeInputError(number)
	
	!isFileUploaded
		? setInputError(photoInput, 'To pole jest wymagane.')
    	: removeInputError(photoInput)

    !option_1.checked
        ? setInputError(option_1, 'To pole jest wymagane.')
		: removeInputError(option_1)

    !option_2.checked
        ? setInputError(option_2, 'To pole jest wymagane.')
    	: removeInputError(option_2)
	
	const validate = () => {
		return nameValue 
			&& emailValue 
			&& isEmail(emailValue) 
			&& phoneValue 
			&& numberValue 
			&& !(numberValue.length < 4 || numberValue.length > 6) 
			&& photoInput.files[0].name 
			&& option_1.checked 
			&& option_2.checked
	}

	const values = {
		name: nameValue,
		email: emailValue,
		phone: phoneValue,
		number: numberValue,
		file: photoInput.files[0].name,
		option1: option_1.checked,
		option2: option_2.checked,
	}

	const submitForm = () => {
		alert('Wysłano poprawnie');

		fetch('http://www.martyna-stosik.com/api-service-endpoint', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(values),
		})
			.then(response => console.log(response))
			.catch(error => console.error('Error:', error))
	}
	
	validate() && submitForm();
}

const setInputError = (input, message) => {
	const formControl = input.parentElement;
	const errorText = formControl.querySelector('span');
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
