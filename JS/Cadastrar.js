const inputsenha = document.querySelector('input#senha');
const name = document.querySelector('input#name');
const sname = document.querySelector('input#Sobrename');
const email = document.querySelector('input#telemail');
const btn = document.getElementsByTagName('a')[0];
const warn = document.querySelector('p#warn');
const Campos = document.querySelectorAll('section#main div#res input');

const Users = JSON.parse(localStorage.getItem('Users')) || [];
console.log(Users);

const AddUser = () => {
  const id = parseInt(Math.random() * 1000);
  const mail = email.value;
  const nome = name.value + ' ' + sname.value;
  const senha = inputsenha.value;

  const NewUser = {
    id,
    mail,
    nome,
    senha,
  };

  const Dados = Users.filter((item) => item.mail === mail);
  if (Dados.length === 0) {
    Users.push(NewUser);
  } else {
    warn.innerHTML = 'Digite um Email Diferente';
    email.value = '';
    email.style.border = '0';
    email.style.borderLeft = '2px';
    email.style.borderBottom = '2px';
    email.style.borderColor = '#f00';
    email.style.borderStyle = 'solid';
  }

  console.log(Dados);
  SaveDados();
};

btn.onclick = () => {
  if (
    inputsenha.value == '' ||
    email.value == '' ||
    name.value == '' ||
    sname.value == ''
  ) {
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
    AddUser();
  }
};

const SaveDados = () => {
  localStorage.setItem('Users', JSON.stringify(Users));
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
