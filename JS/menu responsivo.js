const Hmb = document.querySelector('header nav img');
const nav = document.querySelector('nav');
const ul = document.querySelector('#menu');
Hmb.style.cursor = 'pointer';

Hmb.onclick = () => {
  nav.style.display = 'block';
  ul.style.display = 'block';
  Hmb.style.display = 'none';
};