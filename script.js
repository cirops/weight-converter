const output = document.getElementById("output");
output.style.visibility = "hidden";

const inputUnit = document.getElementById("inputUnit");
const inputValue = document.getElementById("inputValue");

const weights = {
  gram: {
    kilogram: 0.001,
    ounce: 0.035274,
    pound: 0.00220462,
  },
  kilogram: {
    gram: 1000,
    ounce: 35.274,
    pound: 2.20462,
  },
  ounce: {
    gram: 28.3495,
    kilogram: 0.0283495,
    pound: 0.0625,
  },
  pound: {
    gram: 453.592,
    kilogram: 0.453592,
    ounce: 16,
  },
};

inputValue.addEventListener("input", (e) => {
  unit = inputUnit.value;
  value = e.target.value;
  if (!value) {
    output.style.visibility = "hidden";
    return;
  }

  document.querySelectorAll(".card").forEach((card) => {
    card.style.display = "block";
  });

  outputToHide = document.getElementById(`card-${unit}`);
  outputToHide.style.display = "none";

  output.style.visibility = "visible";

  document.querySelectorAll(".outputDiv").forEach((out) => {
    out.innerHTML = value * weights[unit][out.id];
  });
});

inputUnit.addEventListener("input", (e) => {
  inputValue.value = "";
  inputValue.placeholder = `Enter ${e.target.value}s...`;
  output.style.visibility = "hidden";
});
