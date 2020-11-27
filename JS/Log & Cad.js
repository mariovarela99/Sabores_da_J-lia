const Enter = document.querySelector('a#Entrar');
const Create = document.querySelector('a#Criar');
const Users = JSON.parse(localStorage.getItem('Users')) || [];
console.log(Users);

Enter.onclick = () => {
  document.getElementsByTagName('section')[0].style.display = 'flex';
  const X = document.querySelector('section.Enter div#res div#X button');

  X.onclick = () => {
    document.querySelector('section.Enter').style.display = 'none';
    Campos.forEach((element) => {
      element.style.border = '0';
      element.style.borderColor = '#000';
      element.style.borderBottom = '1px';
      element.style.borderLeft = '1px';
      element.style.borderStyle = 'solid';
      warn.innerHTML = '';
    });
    //Esta Função Tira As bordas de alerta quando um dos inputs for selecionado
  };

  const inputsenha = document.querySelector('section.Enter input#senha');
  const inputmail = document.querySelector('section.Enter input#telemail');
  const btn = document.querySelector('section.Enter a#botao');
  const sign = document.querySelector('section.Enter div#res div.sign a');
  const warn = document.querySelector('section.Enter p#warn');
  const Campos = document.querySelectorAll('section.Enter div#res input');

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
};

Create.onclick = () => {
  document.getElementsByTagName('section')[1].style.display = 'flex';
  const X = document.querySelector('section.Create div#res div#X button');

  X.onclick = () => {
    document.querySelector('section.Create').style.display = 'none';
    Campos.forEach((element) => {
      element.style.border = '0';
      element.style.borderColor = '#000';
      element.style.borderBottom = '1px';
      element.style.borderLeft = '1px';
      element.style.borderStyle = 'solid';
      warn.innerHTML = '';
    });
    //Esta Função Tira As bordas de alerta quando um dos inputs for selecionado
  };

  const inputsenha = document.querySelector('section.Create input#senha');
  const name = document.querySelector('section.Create input#name');
  const sname = document.querySelector('section.Create input#Sobrename');
  const email = document.querySelector('section.Create input#telemail');
  const btn = document.querySelector('section.Create a#botao');
  const warn = document.querySelector('section.Create p#warn');
  const Campos = document.querySelectorAll('section#main div#res input');

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
    email.value = '';
    name.value = '';
    sname.value = '';
    inputsenha.value = '';
    warn.style.color = 'rgb(116, 116, 228)';
    warn.innerHTML = 'Cadastrado Com sucesso.';
    warn.style.color = 'rgb(255, 0, 0)';
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
};

// const Password = () => {
//   const Senha = document.querySelector('section.Create div#res input#senha');
//   const aviso = document.querySelector('section.Create div#res p#warn');
//   aviso.style.width = '100%';
//   const Símbolos = ['@', '#', '$', '%', '^', '&', '*', '!', '£', '§', '€'];
//   const Numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
//   const Invalidos = [
//     '\\',
//     '/',
//     "'",
//     '"',
//     '~',
//     '^',
//     '´',
//     '`',
//     '|',
//     '`',
//     '-',
//     '+',
//     '=',
//     '*',
//     '[',
//     ']',
//     '(',
//     ')',
//   ];
//   const Alfa1 = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z',
//   ];
//   const Alfa2 = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'g',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z',
//   ];
//   console.log(Alfa1);
//   const btn = document.querySelector('section.Create a#botao');

//   const meter = document.createElement('meter');
//   meter.min = '0';
//   meter.max = '10';
//   meter.value = '0';
//   meter.style.margin = '5px 0px';

//   Senha.onkeydown,
//     (Senha.onkeyup = () => {
//       Invalidos.map((item) => {
//         if (Senha.value.includes(item)) {
//           aviso.innerHTML = 'Senha Inválida';
//           alert('Palavra passe Incorreta');
//           console.log('Fake News');
//         }
//       });

//       if (Senha.value.length >= 0 && Senha.value.length <= 3) {
//         meter.value = 0.5;
//         aviso.appendChild(meter);
//       } else {
//         meter.value = 1;
//         aviso.appendChild(meter);

//         Alfa1.map((item) => {
//           if (Senha.value.includes(item)) {
//             meter.value = 2;
//             aviso.appendChild(meter);
//           }
//         });

//         Alfa2.map((item) => {
//           if (Senha.value.includes(item)) {
//             meter.value = 3;
//             aviso.appendChild(meter);
//           }
//         });

//         Numbers.map((item) => {
//           if (Senha.value.includes(item)) {
//             meter.value = 4;
//             aviso.appendChild(meter);
//           }
//         });

//         Símbolos.map((item) => {
//           if (Senha.value.includes(item)) {
//             meter.value = 5;
//             aviso.appendChild(meter);
//           }
//         });

//         Símbolos.map((item) => {
//           Numbers.map((index) => {
//             if (Senha.value.includes(item) && Senha.value.includes(index)) {
//               meter.value = 6;
//               aviso.appendChild(meter);
//             }
//           });
//         });

//         Símbolos.map((item) => {
//           Numbers.map((index) => {
//             Alfa1.map((a) => {
//               Alfa2.map((A) => {
//                 if (
//                   Senha.value.includes(item) &&
//                   Senha.value.includes(index) &&
//                   Senha.value.includes(a) &&
//                   Senha.value.includes(A) &&
//                   Senha.value.length > 8 &&
//                   (Senha.value.includes(' ') || Senha.value.includes('_'))
//                 ) {
//                   meter.value = 10;
//                   aviso.appendChild(meter);
//                 }
//               });
//             });
//           });
//         });
//       }
//     });

//   Senha.onblur = () => {
//     aviso.innerHTML = '';
//   };
// };
