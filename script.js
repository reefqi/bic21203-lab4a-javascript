const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");
const userInput = document.getElementById("userInput");
const result = document.getElementById("result");
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function changeMessage() {
  message.textContent = "Hello there!";
}

changeBtn.addEventListener("click", changeMessage);

function checkInput() {
  const rawValue = userInput.value.trim();

  // Validate empty input or non-numeric strings
  if (rawValue === "" || isNaN(Number(rawValue))) {
    result.textContent = "Please enter a valid number!";
    return;
  }

  const numberValue = Number(rawValue);

  if (numberValue < 10) {
    result.textContent = "The number is lower than 10";
  } else if (numberValue > 10) {
    result.textContent = "The number is higher than 10";
  } else {
    result.textContent = "The number is equal to 10";
  }
}

checkBtn.addEventListener("click", checkInput);

function generateNumbers() {
  numberList.textContent = "";

  for(let i =1; i<=5; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "The number is " + i;
    numberList.appendChild(listItem);
  }
}

generateBtn.addEventListener("click", generateNumbers);