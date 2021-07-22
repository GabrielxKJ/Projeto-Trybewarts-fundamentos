const btnLogin = document.querySelector('#btn-login');
const loginEmail = document.querySelector('#loginEmail');
const loginSenha = document.querySelector('#loginSenha');

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (loginEmail.value === 'tryber@teste.com' && loginSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
