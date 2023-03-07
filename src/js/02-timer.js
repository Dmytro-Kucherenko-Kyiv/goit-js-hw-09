import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const atetimePicker = document.querySelector('input[type="text"]');
const startBtn = document.querySelector('[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0].getTime());
  }
};

flatpickr(atetimePicker, options);
/* 
  if (selectedDate.getTime() <= defaultDate.getTime()) {
    startBtn.disabled = false;
    window.alert("Please choose a date in the future")
  } startBtn.disabled = true; */