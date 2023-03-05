function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector('[data-start]');
const changeColorStop = document.querySelector('[data-stop]');
const body = document.querySelector("body");

changeColor.addEventListener('click', (event) => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
})

changeColorStop.addEventListener('click', (event) => {

})