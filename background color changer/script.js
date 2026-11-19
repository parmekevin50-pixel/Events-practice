// Select HTML elements

let colorButtons = document.querySelectorAll(".color-btn");

let randomBtn = document.getElementById("randomBtn");
let resetBtn = document.getElementById("resetBtn");
let copyBtn = document.getElementById("copyBtn");

let colorCode = document.getElementById("colorCode");
let colorPicker = document.getElementById("colorPicker");

let defaultColor = "#E8EDF5";

// Function to change background color

function changeColor(color) {
  document.body.style.backgroundColor = color;

  colorCode.innerText = color.toUpperCase();

  colorPicker.value = color;
}

// Color buttons

colorButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let color = button.getAttribute("data-color");

    changeColor(color);
  });
});

// Random color generator

randomBtn.addEventListener("click", function () {
  let randomColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  changeColor(randomColor);
});

// Reset button

resetBtn.addEventListener("click", function () {
  changeColor(defaultColor);
});

// Color picker

colorPicker.addEventListener("input", function () {
  changeColor(colorPicker.value);
});

// Copy HEX code

copyBtn.addEventListener("click", async function () {
  try {
    await navigator.clipboard.writeText(colorCode.innerText);

    copyBtn.innerText = "Copied!";
  } catch (error) {
    copyBtn.innerText = "Copy Failed";
  }
});
