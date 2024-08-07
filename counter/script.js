const btn = document.querySelector("#btn-reset");
const main = document.querySelector("#Klickbereich");
const ausgabe = document.querySelector("#counter-ausgabe");

let counter = 0;
let colorCounter = 0;

btn.addEventListener("click", counterZuruecksetzen);
document.addEventListener("keydown", counterStarten); // keydown ist event.code
main.addEventListener("click", counterStarten); //click ist event.type

function counterStarten(event) {
  const key = event.code;
  if (key === "Space" || key === "Enter" || event.type === "click") {
    counter++;
    colorCounter++;
    zaehlAusgabe();
    hintergrundBildFunktion();
    console.log("start");
  }
}

function counterZuruecksetzen() {
  counter = 0;
  colorCounter = 0;
  zaehlAusgabe();
  hintergrundBildFunktion();
  console.log("reset");
}

function zaehlAusgabe() {
  ausgabe.innerText = counter;
}
function hintergrundBildFunktion() {
  main.style.setProperty("--hochzaehlen", colorCounter + "%");
  if (colorCounter > 100) {
    colorCounter = 0;
  }
}

/*let counter = 0;
let colorCounter = 0;
const label = document.querySelector("label");

function increaseCounter() {
  counter++;
  label.innerText = counter;

  colorCounter++;
  if (colorCounter === 101) {
    colorCounter = 1;
  }
  main.style.setProperty("--counter", colorCounter + "%");
}
const main = document.querySelector("main");
main.addEventListener("click", increaseCounter);

function resetCounter() {
  counter = 0;
  colorCounter = 0;
  label.innerText = counter;
  main.style.setProperty("--counter", 0 + "%");
  button.blur();
}
const button = document.querySelector("button");
button.addEventListener("click", resetCounter);

document.addEventListener("keypress", function (e) {
  console.log(e.key);
  if (["Enter", " "].includes(e.key)) {
    increaseCounter();
  }
});
*/
