const timer = (deadLine) => {
  let timerDays = document.querySelectorAll('.count_1');
  let timerHours = document.querySelectorAll('.count_2');
  let timerMinutes = document.querySelectorAll('.count_3');
  let timerSeconds = document.querySelectorAll('.count_4');
  let timerId = null;
  
  const declOfNum = (n, textForms) => {
    n = Math.abs(n) % 100; 
    let n1 = n % 10;
    if (n > 10 && n < 20) { return textForms[2]; }
    if (n1 > 1 && n1 < 5) { return textForms[1]; }
    if (n1 == 1) { return textForms[0]; }
    return textForms[2];
  };

  const getTimeRemaining = () => {
      let dateStop = new Date(deadLine);
      let diff = dateStop - new Date();

      let days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      let hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      let minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      let seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

      if (diff <= 0) {
          clearInterval(timerId);
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
      }

      return {
          diff: diff,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
      };

  };

  const updateClock = () => {
      let getTime = getTimeRemaining();
      timerDays.forEach(day => {
        day.innerHTML = `${declOfNum(getTime.days, [" День: ", " Дня: ", " Дней: "])}<br> <span>${getTime.days < 10 ? '0' + getTime.days : getTime.days}</span>`;
      });
      timerHours.forEach(hour => {
        hour.innerHTML = `${declOfNum(getTime.hours, [" Час: ", " Часа: ", " Часов: "])}<br> <span>${getTime.hours < 10 ? '0' + getTime.hours : getTime.hours}</span>`;
      });
      timerMinutes.forEach(minute => {
        minute.innerHTML = `${declOfNum(getTime.minutes, [" Минута: ", " Минуты: ", " Минут: "])}<br> <span>${getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes}</span>`;
      });
      timerSeconds.forEach(second => {
        second.innerHTML = `${declOfNum(getTime.seconds, [" Секунда: ", " Секунды: ", " Секунд: "])}<br> <span>${getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds}</span>`;
      });
  };


  updateClock();
  timerId = setInterval(updateClock, 1000);

};
export default timer;