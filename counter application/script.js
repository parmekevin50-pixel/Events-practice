let count = 0;

// Select HTML elements
let countDisplay = document.getElementById("count");

let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");

// Increase button event
increaseBtn.addEventListener("click", function () {
  count++;

  countDisplay.innerText = count;
});

// Decrease button event
decreaseBtn.addEventListener("click", function () {
  count--;

  countDisplay.innerText = count;
});

// Reset button event
resetBtn.addEventListener("click", function () {
  count = 0;

  countDisplay.innerText = count;
});
