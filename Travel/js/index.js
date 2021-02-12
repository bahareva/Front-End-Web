"use strict";

const form = document.getElementById('wrapper')

let usernameError = document.getElementById("username-error");
let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error");
let passwordError = document.getElementById("password-error");
let differentPasswordsError = document.getElementById("confirm_password-error");

function setHiden() {
  usernameError.classList.add('hidden');
  emailError.classList.add('hidden');
  phoneError.classList.add('hidden');
  passwordError.classList.add('hidden');
  differentPasswordsError.classList.add('hidden');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  setHiden()
  let personalInfo = {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    confirm_password: document.getElementById('confirm_password').value,
    phone: document.getElementById('phone').value
  };

  validateUsername(personalInfo.username);
  validateEmail(personalInfo.email);
  validatePhone(personalInfo.phone);
  validatePassword(personalInfo.password);
  validateEqualPasswords(personalInfo.password, personalInfo.confirm_password);
});

function validatePhone(field) {
  if (field !== '') {
    let phoneFormat = /^[0-9]{10}/;
    if (field.match(phoneFormat)) {
      return true;
    }
    else {
    phoneError.innerText = "Invalid phone number. It should consist of 10 numbers.";
    phoneError.classList.remove('hidden');
    }
  }
  else {
    phoneError.innerText = "Phone number field is required.";
    phoneError.classList.remove('hidden');
  }
}

function validateEmail(field) {
  if (field === '') {
    emailError.innerText = "E-mail address field is required.";
    emailError.classList.remove('hidden');
  }
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (field.match(mailformat)) {
    return true;
  }
  else {
    emailError.innerText = "Invalid e-mail address.";
    emailError.classList.remove('hidden');
  }
}

function validateUsername(field) {
  if (field === '') {
    usernameError.innerText = "Username is required field.";
    usernameError.classList.remove('hidden');
    return false;
  }
  if (field.length < 3 || field.length > 10) {
    usernameError.innerText = "Username should be between 3 and 10 symbols.";
    usernameError.classList.remove('hidden');
    return false; 
  }
  return true;
}

function validatePassword(field) {
  let passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  if ((field != '' && field.length < 6) || !field.match(passwordformat)) {
    passwordError.innerText = "Too short password.";
    passwordError.classList.remove('hidden');
  }
  if (field === '') {
    passwordError.innerText = "Password is required field.";
    passwordError.classList.remove('hidden');
  }
  return true;
}

function validateEqualPasswords(firstField, secondField) {
  if (secondField === '') {
    differentPasswordsError.innerText = "Confirm password is required field.";
    differentPasswordsError.classList.remove('hidden');
  }
  if (firstField !== secondField) {
    differentPasswordsError.innerText = "Passwords are different.";
    differentPasswordsError.classList.remove('hidden');
  }
}