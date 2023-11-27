const addButtonElement = document.getElementById("counterAdd");
const subButtonElement = document.getElementById("counterSub");
const counterDisplayElement = document.getElementById("counterDisplay");
let count = 0;
let limit = 20;

const updateCounterDisplay = () => {
  if (count < 0) {
    count = 0;
  }
  if (count > limit) {
    count = limit;
  }

  counterDisplay.textContent = count;
  document.body.style.setProperty(
    "background-color",
    `rgb(${(count / limit) * 255}, 64,0)`
  );
};

addButtonElement.addEventListener("click", () => {
  count = count + 1;
  updateCounterDisplay();
});

subButtonElement.addEventListener("click", () => {
  count = count - 1;
  updateCounterDisplay();
});

updateCounterDisplay();
