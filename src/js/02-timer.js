import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const atetimePicker = document.querySelector('input[type="text"]');
const startButton = document.querySelector('[data-start]');

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
  Notiflix.Notify.warning('Please choose a date in the future');
    atetimePicker.value = '';
    startButton.disabled = true;
  } else {
      startButton.disabled = false;
    }
}};

flatpickr(atetimePicker, options);

startButton.addEventListener('click', () => {
  const endDate = new Date(atetimePicker.value);
  const dateInterval = setInterval(() => {
    const timeOdds = endDate - new Date();
    const { days, hours, minutes, seconds } = convertTime(timeOdds);
    document.querySelector('[data-days]').textContent = addZero(days);
    document.querySelector('[data-hours]').textContent = addZero(hours);
    document.querySelector('[data-minutes]').textContent =
      addZero(minutes);
    document.querySelector('[data-seconds]').textContent =
      addZero(seconds);
  }, 1000);
});
function addZero(value) {
  return String(value).padStart(2, '0');
}

function convertTime(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const timerWrap = document.querySelector('.timer');
timerWrap.style.marginTop = '20px';
timerWrap.style.color = 'black';
timerWrap.style.display = 'flex';
const fieldWrap = timerWrap.querySelectorAll('.field');
fieldWrap.forEach(fieldWrap => {
  fieldWrap.style.marginRight = '20px';
  fieldWrap.style.fontSize = '1rem';
  fieldWrap.style.textTransform = 'uppercase';
  fieldWrap.style.display = 'flex';
  fieldWrap.style.flexDirection = 'column';
  fieldWrap.style.alignItems = 'center';
});
const dateWrap = document.querySelectorAll('.value');
dateWrap.forEach(dateWrap => {
  dateWrap.style.fontSize = '2.5rem';
});