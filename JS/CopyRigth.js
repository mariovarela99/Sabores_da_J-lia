const Time = () => {
  const Data = new Date();
  var year = Data.getFullYear();
  var hour = Data.getHours();
  var minutes = Data.getMinutes();
  var seconds = Data.getSeconds();
  spantime.innerHTML = `${year}  ${hour} - ${minutes} - ${seconds}`;
};

const spantime = document.querySelector('span.date');

setInterval(Time, 1000);
