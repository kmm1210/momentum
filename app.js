const HIDDEN_CLASSNAME = "hidden";

const numberForm = document.querySelector("#number-form");
const generateInput = numberForm.querySelector("h3 input");
const guessInput = numberForm.querySelector("h4 input");
const resultDiv = document.querySelector("#result-div");
const choseNum = resultDiv.querySelector("h4");
const result = resultDiv.querySelector("h3");

function randomNumber() {
  const generateNum = generateInput.value;
  const randomNum = Math.random() * parseFloat(generateNum);
  return Math.ceil(randomNum);
}
function onPlaySubmit(event) {
  event.preventDefault();
  const machineNum = randomNumber();
  const guessNum = guessInput.value;
  choseNum.innerText = `You chose:${guessNum} the machine chose:${machineNum}.`;
  result.innerText = guessNum < machineNum ? "You lost!" : "You won!";
  resultDiv.classList.remove(HIDDEN_CLASSNAME);
}

numberForm.addEventListener("submit", onPlaySubmit);
