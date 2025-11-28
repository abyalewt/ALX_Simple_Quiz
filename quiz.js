/**
 * Function checkAnswer:
 * Checks the user's selected radio button value against the correct answer
 * and updates the feedback element accordingly.
 */
function checkAnswer() {
  // 1. Identify the Correct Answer:
  const correctAnswer = "4";

  // 2. Retrieve the User’s Answer:
  // Selects the radio button that is currently checked (selected)
  const selectedInput = document.querySelector('input[name="quiz"]:checked');

  // Check if any radio button was selected
  if (!selectedInput) {
    document.getElementById("feedback").textContent =
      "Please select an answer before submitting.";
    return; // Exit the function if no answer is selected
  }

  // Access the value property of the selected input
  const userAnswer = selectedInput.value;

  // Get the feedback element reference
  const feedbackElement = document.getElementById("feedback");

  // 3. Compare the User’s Answer with the Correct Answer:
  if (userAnswer === correctAnswer) {
    // Correct Answer
    feedbackElement.textContent = "Correct! Well done.";
    feedbackElement.style.color = "green";
  } else {
    // Incorrect Answer
    feedbackElement.textContent = "That's incorrect. Try again!";
    feedbackElement.style.color = "red";
  }
}

// 4. Add an Event Listener to the Submit Button:
// Wait for the DOM to be fully loaded before adding the listener
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit-answer");

  // Add a click event listener, passing the checkAnswer function (no parentheses)
  submitButton.addEventListener("click", checkAnswer);
});
