let isDown = false;
let newValue = 0;

const wrapper = document.querySelector(".wrapper");
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
const sliderValue = document.querySelector(".slider-value");
const sliderRuler = document.querySelector(".slider-ruler");

const step = 10;
const max = 100;
const min = 0;

sliderRuler.innerHTML = "";
for (let i = 0; i <= max; i += step) {
  const label = document.createElement("label");
  label.textContent = i;
  if (i <= 10){
    label.style.left = `${(i / max) * 100}%`;
  } else if (i <= 40) {
    label.style.left = `${((i / max) * 100)-1}%`;
  } else if (i <= 70) {
    label.style.left = `${((i / max) * 100)-2}%`;
  } else {
    label.style.left = `${((i / max) * 100)-3}%`;
  }
  label.classList.add('unselectable')
  sliderRuler.appendChild(label);
}

sliderValue.textContent = newValue;

slider.addEventListener("mousedown", () => {
  isDown = true;
});

sliderRuler.addEventListener("mousedown", () => {
  isDown = true;
});

wrapper.addEventListener("mouseup", () => {
  isDown = false;
});

wrapper.addEventListener("mousemove", (event) => {
  if (isDown) {
    let x = event.clientX - sliderContainer.offsetLeft;
    x = Math.max(x, 0);
    x = Math.min(x, sliderContainer.clientWidth - slider.clientWidth);

    slider.style.left = `${x}px`;
    sliderValue.style.left = `${x}px`;

    const percentage = (x / (sliderContainer.clientWidth - slider.clientWidth)) * 100;
    const value = Math.round((percentage / 100) * max);
    newValue = value;
    sliderValue.textContent = newValue;
  }
});