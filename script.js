const form = document.querySelector("#detector-form");
const essayInput = document.querySelector("#essay-input");
const resultText = document.querySelector("#result-text");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const submittedText = essayInput.value.trim();

  if (!submittedText) {
    resultText.textContent = "Please enter some text first.";
    return;
  }

  const percent = Math.floor(Math.random() * 100) + 1;
  const verdict = percent >= 50 ? "likely AI" : "likely not AI";

  resultText.textContent = `${percent}% chance this is ${verdict}.`;
});
