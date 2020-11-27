const inputsenha = document.querySelector('input#senha');
const inputmail = document.querySelector('input#telemail');
const btn = document.querySelector('a#botao');
const Campos = document.querySelectorAll('section#main div#res input');

const Users = JSON.parse(localStorage.getItem('Users')) || [];
console.log(Users);

const Login = () => {
  const mail = inputmail.value;
  const senha = inputsenha.value;
  var Dados = [];

  Users.map((item) => {
    if (item.mail === mail && item.senha === senha) {
      Dados = item;
    }
  });

  if (Dados.length !== 0) {
    alert('User Encontrado');
    console.log(Dados);
  } else {
    alert('User not found');
    console.log(Dados);
  }
};

btn.onclick = () => {
  if (inputsenha.value == '' || inputmail.value == '') {
    warn.innerHTML = 'Os Campos são Obrigatórios';
    Campos.forEach((element) => {
      if (element.value == '') {
        element.style.border = '0';
        element.style.borderLeft = '2px';
        element.style.borderBottom = '2px';
        element.style.borderColor = '#f00';
        element.style.borderStyle = 'solid';
        //Esta Fução Cria bordas vermelhas à um input vazio
      }
    });
  } else {
    Login();
  }
};

Campos.forEach((element) => {
  element.onclick = () =>
    Campos.forEach((element) => {
      element.style.border = '0';
      element.style.borderColor = '#000';
      element.style.borderBottom = '1px';
      element.style.borderLeft = '1px';
      element.style.borderStyle = 'solid';
      warn.innerHTML = '';
    });
  //Esta Função Tira As bordas de alerta quando um dos inputs for selecionado
});
