const quizData = [
  {
    question: "Where is Brimstone from?",
    options: ["America", "Australia", "Canada", "Germany", "Russia"],
    correctAnswer: "America",
    points: getRandomPoints(),
  },
  {
    question:
      "Is this one of Brimstone's voice lines? \"Drink some water, reload your mags, and let's get back out there.\"",
    options: ["True", "False", "None"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    question: "What role does Brimstone play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Controller",
    points: getRandomPoints(),
  },

  // ... more questions to be added ...
];

let currentPage = 0;
let totalScore = 0;

// Function to generate random points
function getRandomPoints() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to render the current quiz page
function renderQuizPage() {
  const currentQuestion = quizData[currentPage];

  if (currentQuestion) {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = `
            <h2>${currentQuestion.question}</h2>
            <ul>
                ${currentQuestion.options
                  .map(
                    (option, index) => `
                    <li>
                        <input type="radio" id="option${index}" name="answer" value="${option}">
                        <label for="option${index}">${option}</label>
                    </li>
                `
                  )
                  .join("")}
            </ul>
            
            <button onclick="submitAnswer()" id="next">Next</button>
        `;
  } else {
    // Quiz completed! Show total score
    alert(`Quiz completed! Total score: ${totalScore}`);
  }
}

// Function to submit the answer and move to the next question
function submitAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (selectedAnswer) {
    const userAnswer = selectedAnswer.value;
    const currentQuestion = quizData[currentPage];

    if (userAnswer === currentQuestion.correctAnswer) {
      totalScore += currentQuestion.points;
    }

    currentPage++;
    renderQuizPage();
  } else {
    alert(`Please select an option before proceeding further!`);
  }
}

// Initial Render
renderQuizPage();
