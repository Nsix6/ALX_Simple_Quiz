const checkAnswer = () => {
  let correctAnswer = 4;
  let feedback = document.getElementById("feedback");

  let userAnswer = Number(
    document.querySelector('input[name="quiz"]:checked')?.value
  );
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
};

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
