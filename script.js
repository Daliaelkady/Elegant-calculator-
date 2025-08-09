const display = document.getElementById("display");
let memory = 0;

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function appendSqrt() {
  try {
    display.value = Math.sqrt(parseFloat(display.value) || 0);
  } catch {
    display.value = "Error";
  }
}

function appendSquare() {
  try {
    display.value = Math.pow(parseFloat(display.value) || 0, 2);
  } catch {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function(event) {
  const key = event.key;
  if (!isNaN(key) || "+-*/.%".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    clearDisplay();
  }
});
