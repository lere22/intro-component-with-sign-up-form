const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnSubmit = document.getElementById("submit");
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function showError(input, msg) {
	const formInput = input.parentElement;
	const errorMessage = formInput.querySelector(".error-text");

	formInput.classList.add("error");
	errorMessage.textContent = input.placeholder + msg;
	errorMessage.style.display = "block";
}

function removeError(input) {
	const formInput = input.parentElement;
	const errorMessage = formInput.querySelector(".error-text");

	formInput.classList.remove("error");
	errorMessage.style.display = "none";
}

function checkEmail(email) {
	const formInput = email.parentElement;
	const errorMessage = formInput.querySelector(".error-text");

	if (email.value === "" || email.value === undefined) {
		showError(email, " cannot be empty");
	} else if (!email.value.match(regexEmail)) {
		formInput.classList.add("error");
		errorMessage.textContent = "Looks like, this is not an email";
		errorMessage.style.display = "block";
	} else {
		removeError(email);
	}
}

function validationForm(input) {
	input.forEach((element) => {
		if (element.value === "" || element.value === undefined) {
			showError(element, " cannot be empty");
		} else {
			removeError(element);
		}
	});
}

btnSubmit.addEventListener("click", (e) => {
	// prevent default action of form
	e.preventDefault();

	const emailValid = checkEmail(email);

	validationForm([firstName, lastName, password, emailValid]);
});
