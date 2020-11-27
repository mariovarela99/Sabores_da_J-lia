const images = [
  'images/Bolacha-em-forma-de-boneco-e1574247116297-300x300.jpg',
  'images/Bolachas-em-forma-de-Poop-emoji-e1568712554260-300x300.jpg',
  'images/Bolinhos-do-monstro-das-bolachas-e1562312581789-300x300.jpg',
  'images/Bolo-de-Chocolate-e-Nozes-300x300.png',
  'images/Bolo-de-maçã-vista-de-frente-300x300.jpg',
  'images/brownie-300x300.jpg',
  'images/conjunto-de-Pasteis-de-nata-com-cobertura-de-chocolate-300x300.jpg',
  'images/Entrega-de-Donuts-em-casa-quadrado-300x300.jpg',
  'images/sortido-de-bolos-e-bolos-de-pastelaria-300x300.jpg',
  'images/Sortido-de-Mini-bolas-de-berlim-300x300.jpg',
  'images/Tarte-de-Amendoa-300x300.png',
  'images/Torta-de-laranja-300x300.png',
  'images/Trança-300x300.png',
  'images/Três-Mini-bolas-de-berlim-com-creme-frente-e1567112653822-300x300.jpg',
];

const PortFolio = document.querySelector('div#Portfólio');

images.map((item) => {
  div = document.createElement('div');
  img = document.createElement('img');
  img.src = item;
  img.alt = 'Sabores da Júlia';
  div.appendChild(img);
  PortFolio.appendChild(div);
});
