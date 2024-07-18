const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const colorHex = document.getElementById("color-hex");

function render() {
  const redStringValue = red.value;
  const greenStringValue = green.value;
  const blueStringValue = blue.value;

  const redNumberValue = Number(redStringValue);
  const greenNumberValue = Number(greenStringValue);
  const blueNumberValue = Number(blueStringValue);

  // 1. Hintergrund einfärben

  document.body.style.backgroundColor = `rgb(${redNumberValue},${greenNumberValue},${blueNumberValue}`;

  // 2. Hex Wert darstellen
  let redHex = redNumberValue.toString(16);
  let greenHex = greenNumberValue.toString(16);
  let blueHex = blueNumberValue.toString(16);

  if (redHex.length === 1) {
    redHex = "0" + redHex;
  }

  if (greenHex.length === 1) {
    greenHex = "0" + greenHex;
  }

  if (blueHex.length === 1) {
    blueHex = "0" + blueHex;
  }

  colorHex.textContent = `#${redHex}${greenHex}${blueHex}`;
}

render();

red.addEventListener("input", () => {
  render();
});

green.addEventListener("input", () => {
  render();
});

blue.addEventListener("input", () => {
  render();
});

/*

// wenn ich change verwende ändert sich die Farbe erste wenn ich die Maus loslasse

red.addEventListener("change", () => {
    render();
  });
  
  green.addEventListener("change", () => {
    render();
  });
  
  blue.addEventListener("change", () => {
    render();
  });*/
