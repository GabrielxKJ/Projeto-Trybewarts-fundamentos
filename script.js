const btnLogin = document.querySelector('#btn-login');
const loginEmail = document.querySelector('#loginEmail');
const loginSenha = document.querySelector('#loginSenha');
const checkBox = document.querySelector('#agreement');
const btnEnviar = document.querySelector('#submit-btn');
const texto = document.getElementById('textarea');
const count = document.getElementById('counter');
btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (loginEmail.value === 'tryber@teste.com' && loginSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

btnEnviar.disabled = true;
checkBox.addEventListener('change', (event) => {
  event.target.classList.toggle('selected');
  if (checkBox.className === 'selected') {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
});

texto.addEventListener('keyup', () => {
  count.innerText = texto.maxLength - texto.value.length;
});