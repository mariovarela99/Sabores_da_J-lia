const destaques = document.querySelectorAll('section div#destaque div');

destaques.forEach((element) => {
  element.onclick = () => {
    localStorage.setItem('div', JSON.stringify(element));
    console.log(element);
  };
});
