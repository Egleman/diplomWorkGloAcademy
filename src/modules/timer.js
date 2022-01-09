const timer = () => {
    
    const timerDay = document.querySelectorAll('.count_1');
    const timerHours = document.querySelectorAll('.count_2');
    const timerMinutes = document.querySelectorAll('.count_3');
    const timerSeconds = document.querySelectorAll('.count_4');
    /*
    function declOfNum(n, textForms) {  
        n = Math.abs(n) % 100; 
        let n1 = n % 10;
        if (n > 10 && n < 20) { return textForms[2]; }
        if (n1 > 1 && n1 < 5) { return textForms[1]; }
        if (n1 == 1) { return textForms[0]; }
        return textForms[2];
    }
    */

  const deadline = new Date(2022, 01, 17);
  let timerId = null;
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

    timerDay.forEach(day => {
        day.textContent = days < 10 ? '0' + days : days;
    });
    timerHours.forEach(hour => {
        hour.textContent = hours < 10 ? '0' + hours : hours;
    });
    timerMinutes.forEach(minute => {
        minute.textContent = minutes < 10 ? '0' + minutes : minutes;
    });
    timerSeconds.forEach(second => {
        second.textContent = seconds < 10 ? '0' + seconds : seconds;
    });
    //timerDay.textContent = days < 10 ? '0' + days : days;
    //timerHours.textContent = hours < 10 ? '0' + hours : hours;
    //timerMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    //timerSeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    //$days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    //$hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    //$minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    //$seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
  // получаем элементы, содержащие компоненты даты
  //const $days = document.querySelector('.timer__days');
  //const $hours = document.querySelector('.timer__hours');
  //const $minutes = document.querySelector('.timer__minutes');
  //const $seconds = document.querySelector('.timer__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
};

export default timer;