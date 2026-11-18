let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let value = button.getAttribute("data-value");

    if (value === "C") {
      display.value = "";
    } else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        let expression = display.value;

        // Allow only calculator characters
        if (!/^[0-9+\-*/%.() ]+$/.test(expression)) {
          throw new Error("Invalid input");
        }

        let result = Function('"use strict"; return (' + expression + ")")();

        if (!Number.isFinite(result)) {
          throw new Error("Invalid calculation");
        }

        display.value = result;
      } catch (error) {
        display.value = "Error";
      }
    } else {
      if (display.value === "Error") {
        display.value = "";
      }

      display.value += value;
    }
  });
});
