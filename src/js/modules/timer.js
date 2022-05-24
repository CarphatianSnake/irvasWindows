const timer = (deadline) => {

  const saleSubtitle = document.querySelector('.sale_subtitle');

  const day = (new Date(deadline)).getDate(),
        month = (new Date(deadline)).getMonth();
  
  const setSaleSubtitle = (date, month) => {
    return saleSubtitle.textContent = `Успей сэкономить на остеклении! Только до ${date} ${month}!`;
  };

  switch (month) {
    case 0:
      setSaleSubtitle(day, 'января');
      break;
    case 1:
      setSaleSubtitle(day, 'февраля');
      break;
    case 2:
      setSaleSubtitle(day, 'марта');
      break;
    case 3:
      setSaleSubtitle(day, 'апреля');
      break;
    case 4:
      setSaleSubtitle(day, 'мая');
      break;
    case 5:
      setSaleSubtitle(day, 'июня');
      break;
    case 6:
      setSaleSubtitle(day, 'июля');
      break;
    case 7:
      setSaleSubtitle(day, 'августа');
      break;
    case 8:
      setSaleSubtitle(day, 'сентября');
      break;
    case 9:
      setSaleSubtitle(day, 'октября');
      break;
    case 10:
      setSaleSubtitle(day, 'ноября');
      break;
    case 11:
      setSaleSubtitle(day, 'декабря');
      break;
  };

  const getTimeRemaining = () => {
    const timeLeft = Date.parse(deadline) - Date.parse(new Date()),
          days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
          hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
          minutes = Math.floor((timeLeft / (1000 * 60)) % 60),
          seconds = Math.floor((timeLeft / 1000) % 60);
    return {timeLeft, days, hours, minutes, seconds};
  };

  const days = document.querySelector('#days'),
        hours = document.querySelector('#hours'),
        minutes = document.querySelector('#minutes'),
        seconds = document.querySelector('#seconds'),
        timeInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    const timeRemaining = getTimeRemaining();

    const setValue = value => value.toString().length > 1 ? value : `0${value}`;

    days.textContent = setValue(timeRemaining.days);
    hours.textContent = setValue(timeRemaining.hours);
    minutes.textContent = setValue(timeRemaining.minutes);
    seconds.textContent = setValue(timeRemaining.seconds);

    if (timeRemaining.timeLeft < 0) {
      days.textContent = '00';
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
      clearInterval(timeInterval);
    }

  };

  updateTimer();

};

export default timer;