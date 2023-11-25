btnElement = document.querySelector("button");
spanElement = document.querySelector("span");
btnElement.addEventListener("click", function () {
  const input = prompt("Enter your name:");
  spanElement.textContent = input;
});
