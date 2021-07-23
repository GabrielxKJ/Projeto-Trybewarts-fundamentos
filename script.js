const btnLogin = document.querySelector('#btn-login');
const loginEmail = document.querySelector('#loginEmail');
const loginSenha = document.querySelector('#loginSenha');
const checkBox = document.querySelector('#agreement');
const btnEnviar = document.querySelector('#submit-btn');
btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (loginEmail.value === 'tryber@teste.com' && loginSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

btnEnviar.disabled = true;
checkBox.addEventListener('change', function () {
  if (this.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
})
