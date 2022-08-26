const data = new Date();
const hours = data.getHours();
const minutes = data.getMinutes();

setInterval(() => logCurrentTime(hours, minutes), 1000);

function logCurrentTime(...para) {
  const time = [];
  if (para.length == 2) {
    for (const data of para) {
      if (data < 10) {
        data = `0${data}`;
      } else {
        data = `${data}`;
      }
      time.push(data);
    }
    return console.log(time[0] + ':' + time[1]);
  } else {
    return console.log('ERROR');
  }
};