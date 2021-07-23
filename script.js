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
// disable and enable
btnEnviar.disabled = true;
checkBox.addEventListener('click', (event) => { // o botão só ficara habilitado caso a classe do checkbox estiver "selected"
  event.target.classList.toggle('selected');
  if (checkBox.classList === 'selected') {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
});
