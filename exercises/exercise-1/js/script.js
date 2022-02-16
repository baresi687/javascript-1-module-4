// Select the input with id firstName

const firstName = document.querySelector("#firstName");
const errorContainerMessage = document.querySelector(".error__message");
const svg = document.querySelector("#error-icon");

// Add an event to the input >>> onkeyup.

firstName.addEventListener("keyup", logLengthMessage);

function logLengthMessage(event) {
  const inputValue = event.target.value.trim();
  const lengthOfMsg = inputValue.length
  if (lengthOfMsg > 0) {
    svg.style.display = "block"
    errorContainerMessage.innerHTML = "The input has a value"
  } else {
    svg.style.display = "block"
    errorContainerMessage.innerHTML = "The input doesn't have a value"
  }
}

// Get the length of the input

// Make a condition.
// If the length is > 0 = the input has a value
// Else show a message = the input doesn't have a value.