const Fechar = document.querySelector('div#Fechar button');
const Space = document.querySelector('section#Detras');
const details = document.querySelector(
  'section#Detras div.Defrente aside.detail'
);

const imagem = document.querySelector('section#Detras div#imagem');
const Divs = document.querySelectorAll('div#destaque div');
var img = '';
var h2 = '';
var span = '';
var article = '';
const h1 = document.createElement('h1');
h1.textContent = 'Detalhes';

Fechar.onclick = () => {
  Space.style.display = 'none';
};

Divs.forEach((element) => {
  element.onclick = () => {
    Space.style.display = 'flex';
    img = element.style.background;
    console.log(img);
    h2 = element.firstElementChild;
    console.log(h2);
    span = h2.nextElementSibling;
    console.log(span);
    article = span.nextElementSibling;
    console.log(article);
    renderSpace();
  };
});

const renderSpace = () => {
  imagem.innerHTML = '';
  imagem.style.background = img;
  details.innerHTML = '';
  details.appendChild(h1);
  details.appendChild(h2);
  details.appendChild(span);
  details.appendChild(article);
};
