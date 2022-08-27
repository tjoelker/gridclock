const data = new Date();
const time = [];
const hours = data.getHours();
const minutes = data.getMinutes();
const seconds = data.getSeconds();
const element = $elem => {
  return document.getElementsByClassName(`_${$elem}`);
};

// setInterval(() => getCurrentTime(hours, minutes), 1000);

getCurrentTime(hours, minutes);

function getCurrentTime(...$para) {
  time.splice(0, time.length);
  if ($para.length == 2) {
    for (const data of $para) {
      if (data < 10) {
        data = `0${data}`;
      } else {
        data = `${data}`;
      }
      time.push(data);
    }
    return updateCurrentTime(time.join(''));
  } else {
    return console.log('ERROR');
  }
};

function updateCurrentTime($time) {
  for (let i = 0; i < $time.length; i++) {
    setVisibility(i, $time[i]);
  }
};

function setVisibility($i, $num) {
  let previousElement = element($num);
  let currentElement = element($num);

  if ($num == 0) {
    previousElement.style.visibility = 'hidden'; // ! <- breaks here
    currentElement.style.visibility = 'visible';
  } else {
    previousElement.style.visibility = 'hidden';
    currentElement.style.visibility = 'visible';
  }
};