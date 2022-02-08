import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (e: Event) {
  e.preventDefault();
  hideErrorMessage(this);

  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPassword(password, password2);
  if (shouldSendForm(this)) console.log('Enviado');
});

//Function to check for empty fields
function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo Obrigatório');
  });
}

//Function to check if the email is valid
function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

function checkEqualPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas não coincidem');
    showErrorMessage(password2, 'Senhas não coincidem');
  }
}

//function to hide empty field error
function hideErrorMessage(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGE)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));
}

//Function to signal empty field
function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formField = input.parentElement as HTMLDivElement;
  const errorMessage = formField.querySelector(
    '.error-message',
  ) as HTMLSpanElement;

  errorMessage.innerHTML = msg;
  formField.classList.add(SHOW_ERROR_MESSAGE);
}

function shouldSendForm(form: HTMLElement): boolean {
  let send = true;

  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => (send = false));
  return send;
}
