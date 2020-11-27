const Estado = localStorage.getItem('Estado') || '';
const Entrar = document.querySelector('header p#Opções a#Entrar');
const Criar = document.querySelector('header p#Opções a#Criar');
const CO = document.querySelector('header nav ul#menu');
if (Estado == 'Entrou') {
  Entrar.text = 'Perfil';
  Entrar.href = 'Perfil.html' || 'Perfil.html';
  Criar.text = 'Sair';
  Criar.href = 'Sair.html' || 'Sair.html';

  Entrar.style.display = 'none';
  Criar.style.display = 'none';

  const Perfil = document.createElement('li');
  const Cont = document.createElement('a');
  Cont.text = 'Perfil';
  Cont.href = 'Perfil.html' || 'Perfil.html';
  Perfil.appendChild(Cont);
  CO.appendChild(Perfil);
} else if (Estado == 'Saiu') {
  Entrar.text = 'Entrar';
  Entrar.href = 'Login.html' || 'Login.html';
  Criar.text = 'Criar Conta';
  Criar.href = 'Criar.html' || 'Criar.html';
}
