const Prod = document.querySelector('select#produto');
const QTD = document.querySelector('select#DS');
const qtd = document.querySelector('select#Bolos');
const nu = document.querySelector('input#nu');
Prod.onchange = () => {
  if (Prod.value === 'Bolos') {
    qtd.style.display = 'flex';
    QTD.style.display = 'none';
  } else if (Prod.value === 'Salgados') {
    qtd.style.display = 'none';
    QTD.style.display = 'flex';
  } else if (Prod.value === 'Doces') {
    qtd.style.display = 'none';
    QTD.style.display = 'flex';
  } else {
    QTD.style.display = 'none';
    qtd.style.display = 'none';
    nu.style.display = 'none';
  }
};
QTD.onchange = () => {
  if (QTD.value === '60+') {
    nu.style.display = 'flex';
    console.log('Fuck');
  } else {
    nu.style.display = 'none';
  }
};

const Include = document.querySelector('input#Incluir');
const End = document.querySelector('div#Endereço');

Include.onclick = () => {
  if (End.style.display === 'none') {
    End.style.display = 'flex';
    Include.textContent = 'Excluir Entrega';
  } else {
    End.style.display = 'none';
    Include.textContent = 'Incluir Entrega';
  }
};
