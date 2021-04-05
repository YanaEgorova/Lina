const nameInput = document.querySelector('.name-input--js');
const emailInput = document.querySelector('.email-input--js');
const formBtn = document.querySelector('.form-btn--js');
const error = document.querySelector('.form_error');
const errorText = document.querySelector('.js-form_error-text');
const formErrorCloseBtn = document.querySelector('.js-form_error-btn');


formBtn.addEventListener('click', fillInputs);
formErrorCloseBtn.addEventListener('click', closeError);




function fillInputs(e) {
  // e.preventDefault();

  if (nameInput.value.length === 0) {
    error.classList.add('form_error--active');
    errorText.textContent = 'Write your name please';
    console.log('name');
    return;
  }
  if (emailInput.value.length === 0) {
    error.classList.add('form_error--active');
    errorText.textContent = 'Write your email address please';
    console.log('email');
    return;
  }
  if (!emailInput.value.includes('@')) {
    error.classList.add('form_error--active');
    errorText.textContent = 'Enter correct email address please';
    console.log('email @');
    return;
  }
  return false;
}

function closeError() {
  error.classList.remove('form_error--active');
}


// form_name-error

// js-form_error-text