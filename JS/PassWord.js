const Senha = document.querySelector('section.Create div#res input#senha');
const aviso = document.querySelector('section.Create div#res #warn');
aviso.style.width = '100%';
const Símbolos = [
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '!',
  '£',
  '§',
  '€',
  '`',
  "'",
  '"',
  '/',
  '\\',
];
const Numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const meter = document.createElement('meter');
meter.min = '0';
meter.max = '10';
meter.value = '0';
meter.style.margin = '5px 0px';

Senha.onkeydown,
  (Senha.onkeyup = () => {
    if (Senha.value.length >= 0 && Senha.value.length <= 3) {
      meter.value = 0.5;
      aviso.appendChild(meter);
    } else {
      meter.value = 2;
      aviso.appendChild(meter);

      Numbers.map((item) => {
        if (Senha.value.includes(item)) {
          meter.value = 4;
          aviso.appendChild(meter);
        }
      });

      Símbolos.map((item) => {
        if (Senha.value.includes(item)) {
          meter.value = 6;
          aviso.appendChild(meter);
        }
      });

      Símbolos.map((item) => {
        Numbers.map((index) => {
          if (Senha.value.includes(item) && Senha.value.includes(index)) {
            meter.value = 8;
            aviso.appendChild(meter);
          }
        });
      });

      Símbolos.map((item) => {
        Numbers.map((index) => {
          if (
            Senha.value.includes(item) &&
            Senha.value.includes(index) &&
            Senha.value.length > 8 &&
            (Senha.value.includes(' ') || Senha.value.includes('_'))
          ) {
            meter.value = 10;
            aviso.appendChild(meter);
          }
        });
      });
    }
  });

Senha.onblur = () => {
  aviso.innerHTML = '';
};
