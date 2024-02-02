let currentScore = 0;
let currentQuestion = 1;
let currentAgent = '';

const correctAnswers = {
    brimstone: {
        1: 'United States',
        2: 'True',
        3: 'Controller',
        4: 'Viper',
        5: 'Incendiary'
    },
    phoenix: {
        1: 'United Kingdom',
        2: 'True',
        3: 'Duelist',
        4: 'Performing Arts',
        5: 'Hot Hands'
    },
    sage: {
        1: 'China',
        2: 'True',
        3: 'Sentinel',
        4: 'WIP',
        5: 'Ressurection'
    }, 
    sova: {
        1:'Russia',
        2:'True',
        3:'Initiator',
        4:'WIP',
        5:'Owl Drone',
    },
    viper: {
        1:'United States',
        2:'True',
        3:'Controller',
        4:'WIP',
        5:'Snake Bite',
    },
    cypher: {
        1:'Morocco',
        2:'True',
        3:'Sentinel',
        4:'Being Watched',
        5:'Neural Theft',
    },
    reyna: {
        1:'Mexico',
        2:'True',
        3:'Duelist',
        4:'WIP',
        5:'Empress',
    },
    killjoy: {
        1:'Germany',
        2:'True',
        3:'Sentinel',
        4:'WIP',
        5:'Nanoswarm',
    },
    breach: {
        1:'Sweden',
        2:'True',
        3:'Initiator',
        4:'WIP',
        5:'Rolling Thunder',
    },
    omen:{
        1:'Unknown',
        2:'True',
        3:'Controller',
        4:'WIP',
        5:'Dark Cover',
    },
    jett:{
        1:'Korea',
        2:'True',
        3:'Duelist',
        4:'WIP',
        5:'Updraft',
    },
    raze: {
        1:'Brazil',
        2:'True',
        3:'Duelist',
        4:'WIP',
        5:'Boom Bot',
    },
    skye: {
        1:'Australia',
        2:'True',
        3:'Initiator',
        4:'WIP',
        5:'Seekers',
    },
    yoru: {
        1:'Japan',
        2:'True',
        3:'Duelist',
        4:'WIP',
        5:'Gatecrash',  
    },
    astra: {
        1:'Ghana',
        2:'True',
        3:'Controller',
        4:'WIP',
        5:'Nebula',
    },
    KAYO: {
        1:'Alternate Future',
        2:'True',
        3:'Initiator',
        4:'False',
        5:'NULL/CMD',
    },
    Chamber: {
        1:'France',
        2:'True',
        3:'Sentinel',
        4:'Neon',
        5:'Rendezvous',
    },
    Neon: {
        1:'Philippines',
        2:'True',
        3:'Duelist',
        4:'WIP',
        5:'Overdrive',
    },
    Fade: {
        1:'Turkey',
        2:'True',
        3:'Initiator',
        4:'WIP',
        5:'Seize',
    },
    Harbor: {
        1:'India',
        2:'True',
        3:'Controller',
        4:'WIP',
        5:'Reckoning',
    },
    Gekko: {
        1:'United States',
        2:'True',
        3:'Initiator',
        4:'Sunset',
        5:'Dizzy',
    },
    Deadlock: {
        1:'Norway',
        2:'True',
        3:'Sentinel',
        4:'WIP',
        5:'Annihilation',
    },
    Iso: {
        1:'China',
        2:'True',
        3:'Duelist',
        4:'Hitman',
        5:'Undercut',
    }
};

// Function to change the current agent and reset the quiz
function changeAgent() {
    currentAgent = document.getElementById('agentSelector').value;
    document.querySelectorAll('.quiz').forEach(quiz => quiz.classList.add('hidden'));
    document.getElementById(`${currentAgent}Quiz`)?.classList.remove('hidden');
    restartQuiz();
}

// Function to check the selected answer and update the score
function checkAnswer(agent, questionNumber, answer) {
    const isCorrect = answer === correctAnswers[agent][questionNumber];
    if (isCorrect) {
        currentScore += 20;
    } else {
        currentScore += 10;
    }

    // Disable all answer buttons for this question
    const buttons = document.querySelectorAll(`#${agent}Q${questionNumber} .answer-btn`);
    buttons.forEach(button => button.disabled = true);

    // Reveal the next button
    document.getElementById(`${agent}Next${questionNumber}`).classList.remove('hidden');
}

// Function to move to the next question or end the quiz
function nextQuestion(agent, questionNumber) {
    const currentDiv = document.getElementById(`${agent}Q${questionNumber}`);
    currentDiv.classList.add('hidden');

    const nextQuestionDiv = document.getElementById(`${agent}Q${questionNumber + 1}`);
    if (nextQuestionDiv) {
        nextQuestionDiv.classList.remove('hidden');
    } else {
        // End of the quiz for this agent
        document.getElementById("scoreDisplay").innerHTML = `Your compatibility with ${currentAgent}: ${currentScore} %`;
        document.getElementById("scoreDisplay").classList.remove('hidden');
        document.getElementById("restart").classList.remove('hidden');
    }
}

// Function to restart the quiz for the selected agent
function restartQuiz() {
    currentScore = 0;
    document.querySelectorAll('.question').forEach(question => {
        question.classList.add('hidden');
        // Re-enable the answer buttons
        question.querySelectorAll('.answer-btn').forEach(button => {
            button.disabled = false;
        });
    });

    // Hide score display and restart button, then show the first question of the current agent
    document.getElementById("scoreDisplay").classList.add('hidden');
    document.getElementById("restart").classList.add('hidden');
    if (currentAgent) {
        document.getElementById(`${currentAgent}Q1`).classList.remove('hidden');
    }
}

// Event listener for the agent selector change
document.getElementById('agentSelector').addEventListener('change', changeAgent);
