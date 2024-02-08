const quizData = [
  {
    agent: "brimstone",
    questions: [
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
      {
        question:
          "In the lore, who joined the VALORANT Protocol first alongside Brimstone? ",
        options: ["KAY/O", "Astra", "Viper", "Raze"],
        correctAnswer: "Viper",
        points: getRandomPoints(),
      },
      {
        question: "Which is Brimstone's ability?",
        options: ["Owl Drone", "Kill Contract", "Annihilation", "Incendiary"],
        correctAnswer: "Incendiary",
        points: getRandomPoints(),
      },
    ],
  },
  {
    agent: "phoenix",
    questions: [
      {
        question: "Where is Phoenix from?",
        options: [
          "Denmark",
          "Poland",
          "United Kingdom",
          "New Zealand",
          "America",
        ],
        correctAnswer: "United Kingdom",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Phoenix's voice lines? “Ooh, that's going on a highlight reel for sure!”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Phoenix play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Duelist",
        points: getRandomPoints(),
      },
      {
        question: "What did Phoenix go to school for?",
        options: ["Finance", "Fashion", "Performing Arts", "Dance"],
        correctAnswer: "Performing Arts",
        points: getRandomPoints(),
      },
      {
        question: "Which is Phoenix's ability?",
        options: ["Hot Hands", "Hunter's Fury", "Trapwire", "Reckoning"],
        correctAnswer: "Hot Hands",
        points: getRandomPoints(),
      },
    ],
  },
  {
    agent: "sage",
    questions: [
      {
        question: "Where is Sage from?",
        options: ["Philippines", "Malaysia", "Japan", "Korea", "China"],
        correctAnswer: "China",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Sage's voice lines?\n\n“I wasn't strong enough before. But now, now I am strong enough for us all”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Sage play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Sentinel",
        points: getRandomPoints(),
      },
      {
        question: "LORE QUESTION (crow)",
        options: ["Crow"],
        correctAnswer: "Crow",
        points: getRandomPoints(),
      },
      {
        question: "Which is Sage's ability?",
        options: ["Showstopper", "Resurrection", "Regrowth", "Dismiss"],
        correctAnswer: "Resurrection",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "sova",
    questions: [
      {
        question: "Where is Sova from?",
        options: ["Russia", "Germany", "Sweden", "Canada", "Serbia"],
        correctAnswer: "Russia",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Sova's voice lines?\n\n“I believe in all of you, like I believe in myself.”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Sova play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Initiator",
        points: getRandomPoints(),
      },
      {
        question: "LORE QUESTION (crow)",
        options: ["Crow"],
        correctAnswer: "Crow",
        points: getRandomPoints(),
      },
      {
        question: "Which is Sova's ability?",
        options: ["Seekers", "Wingman", "Owl Drone", "Prowler"],
        correctAnswer: "Owl Drone",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "viper",
    questions: [
      {
        question: "Where is Viper from?",
        options: ["Greece", "Canada", "Russia", "America", "Netherlands"],
        correctAnswer: "America",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Viper's voice lines?\n\n“If any of you die, I lose a bet with Brimstone, so don't embarrass me like that, please.”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Viper play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Controller",
        points: getRandomPoints(),
      },
      {
        question: "LORE QUESTION (crow)",
        options: ["Crow"],
        correctAnswer: "Crow",
        points: getRandomPoints(),
      },
      {
        question: "Which is Viper's ability?",
        options: ["Snake Bite", "Recon Bolt", "Leer", "Curveball"],
        correctAnswer: "Snake Bite",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "cypher",
    questions: [
      {
        question: "Where is Cypher from?",
        options: ["Egypt", "Spain", "Algeria", "Morocco", "Portugal"],
        correctAnswer: "Morocco",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Cypher's voice lines?\n\n“What has Kingdom done to this town?! However pretty their lies are, they’re just sucking my city dry!”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Cypher play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Sentinel",
        points: getRandomPoints(),
      },
      {
        question: "What is Cypher's biggest fear?",
        options: ["Bugs", "Being watched", "Viper", "The dark"],
        correctAnswer: "Being watched",
        points: getRandomPoints(),
      },
      {
        question: "Which is Cypher's ability?",
        options: ["Dismiss", "Showstopper", "Fakeout", "Neural Theft"],
        correctAnswer: "Neural Theft",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "reyna",
    questions: [
      {
        question: "Where is Reyna from?",
        options: ["Mexico", "Brazil", "Portugal", "Costa Rica", "Puerto Rico"],
        correctAnswer: "Mexico",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Reyna's voice lines?\n\n“I have lied, beaten, killed to survive. I will kill again and again if it means one more day.”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Reyna play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Duelist",
        points: getRandomPoints(),
      },
      {
        question: "LORE QUESTION (crow)",
        options: ["Crow"],
        correctAnswer: "Crow",
        points: getRandomPoints(),
      },
      {
        question: "Which is Reyna's ability?",
        options: ["Paranoia", "Empress", "Blaze", "Trailblazer"],
        correctAnswer: "Empress",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "killjoy",
    questions: [
      {
        question: "Where is Killjoy from?",
        options: ["Austria", "Norway", "Ireland", "Germany", "Sweden"],
        correctAnswer: "Germany",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Killjoy's voice lines?\n\n“Don't worry team. If you die, I have your memories backed up at base! Heh, just kidding, just kidding. Or am I?”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Killjoy play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Sentinel",
        points: getRandomPoints(),
      },
      {
        question: "LORE QUESTION (crow)",
        options: ["Crow"],
        correctAnswer: "Crow",
        points: getRandomPoints(),
      },
      {
        question: "Which is Killjoy's ability?",
        options: ["Nanoswarm", "Blade Storm", "Undercut", "Overdrive"],
        correctAnswer: "Nanoswarm",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "breach",
    questions: [
      {
        question: "Where is Breach from?",
        options: ["America", "Sweden", "Norway", "Iceland", "Netherlands"],
        correctAnswer: "Sweden",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Breach's voice lines?\n\n“Just swapping in new fusion cells. Okay, my arms are good! We can go.”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Breach play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Initiator",
        points: getRandomPoints(),
      },
      {
        question: "LORE QUESTION (crow)",
        options: ["Crow"],
        correctAnswer: "Crow",
        points: getRandomPoints(),
      },
      {
        question: "Which is Breach's ability?",
        options: ["Wingman", "Rolling Thunder", "Cove", "Contingency"],
        correctAnswer: "Rolling Thunder",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "omen",
    questions: [
      {
        question: "Where is Omen from?",
        options: ["Your nightmares", "Unknown", "The shadows", "Valorant LFG"],
        correctAnswer: "Unknown",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Omen's voice lines?\n\n“They fear death, they should fear so much more than that.”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Omen play?",
        options: ["Initiator", "Sentinel", "Duelist", "Controller"],
        correctAnswer: "Controller",
        points: getRandomPoints(),
      },
      {
        question: "LORE QUESTION (crow)",
        options: ["Crow"],
        correctAnswer: "Crow",
        points: getRandomPoints(),
      },
      {
        question: "Which is Omen's ability?",
        options: ["Mosh Pit", "Double Tap", "Dark Cover", "Cloudburst"],
        correctAnswer: "Dark Cover",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "jett",
    questions: [
      {
        question: "Where is Jett from?",
        options: ["America", "Japan", "Singapore", "Korea", "Sweden"],
        correctAnswer: "Korea",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Jett's voice lines?\n\n“Ha! You should've seen your faces!”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Jett play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Duelist",
        points: getRandomPoints(),
      },
      {
        question: "LORE QUESTION (crow)",
        options: ["Crow"],
        correctAnswer: "Crow",
        points: getRandomPoints(),
      },
      {
        question: "Which is Jett's ability?",
        options: ["Updraft", "Sonic Sensor", "Trapwire", "Barrier Mesh"],
        correctAnswer: "Updraft",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "raze",
    questions: [
      {
        question: "Where is Raze from?",
        options: ["Brazil", "Portugal", "Spain", "Mexico", "Peru"],
        correctAnswer: "Brazil",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Raze's voice lines?\n\n“You can take the girl out of Salvador, but you'll never take the girl out of Salvador. Wait…”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Raze play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Duelist",
        points: getRandomPoints(),
      },
      {
        question: "LORE QUESTION (crow)",
        options: ["Crow"],
        correctAnswer: "Crow",
        points: getRandomPoints(),
      },
      {
        question: "Which is Raze's ability?",
        options: ["Cyber Cage", "Boom Bot", "Haunt", "Cloudburst"],
        correctAnswer: "Boom Bot",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "skye",
    questions: [
      {
        question: "Where is Skye from?",
        options: ["New Zealand", "Canada", "Greece", "America", "Australia"],
        correctAnswer: "Australia",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Skye's voice lines?\n\n“If you see one of my creatures, it's a good thing, alright? You'll figure out what they do eventually.”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Skye play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Initiator",
        points: getRandomPoints(),
      },
      {
        question: "LORE QUESTION (crow)",
        options: ["Crow"],
        correctAnswer: "Crow",
        points: getRandomPoints(),
      },
      {
        question: "Which is Skye's ability?",
        options: ["Spy Cam", "Prowler", "Seekers", "Fault Lines"],
        correctAnswer: "Seekers",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "yoru",
    questions: [
      {
        question: "Where is Yoru from?",
        options: ["Malaysia", "China", "Japan", "Korea", "Vietnam"],
        correctAnswer: "Japan",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Yoru's voice lines?\n\n“Pick something nice to kill them with. It's the least we can do.”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Yoru play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Duelist",
        points: getRandomPoints(),
      },
      {
        question: "LORE QUESTION (crow)",
        options: ["Crow"],
        correctAnswer: "Crow",
        points: getRandomPoints(),
      },
      {
        question: "Which is Yoru's ability?",
        options: ["Headhunter", "Incendiary", "Undercut", "Gatecrash"],
        correctAnswer: "Gatecrash",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "astra",
    questions: [
      {
        question: "Where is Astra from?",
        options: ["Nigeria", "Ghana", "Kenya", "Madagascar", "Botswana"],
        correctAnswer: "Ghana",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Astra's voice lines?\n\n“Take a breath now. Release the tension. Good? Let's go!”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Astra play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Controller",
        points: getRandomPoints(),
      },
      {
        question: "LORE QUESTION (crow)",
        options: ["Crow"],
        correctAnswer: "Crow",
        points: getRandomPoints(),
      },
      {
        question: "Which is Astra's ability?",
        options: ["Dark Cover", "Showstopper", "Devour", "Nebula"],
        correctAnswer: "Nebula",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "kayo",
    questions: [
      {
        question: "Where is KAY/O from?",
        options: ["AI", "machines???", "Killjoy", "Alternate Future"],
        correctAnswer: "Alternate Future",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of KAY/O's voice lines?\n\n“I'll survive a dent or two, can't say the same for you fragile humans.”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does KAY/O play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Initiator",
        points: getRandomPoints(),
      },
      {
        question:
          "KAY/O fought alongside Radiants in the Human-Radiant War. True or false?",
        options: ["True", "False"],
        correctAnswer: "False",
        points: getRandomPoints(),
      },
      {
        question: "Which is KAY/O's ability?",
        options: ["Aftershock", "Rendezvous", "Boom Bot", "Null/Cmd"],
        correctAnswer: "Null/Cmd",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "chamber",
    questions: [
      {
        question: "Where is Chamber from?",
        options: ["Canada", "Italy", "Belgium", "France", "Ireland"],
        correctAnswer: "France",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Chamber's voice lines?\n\n“Please do not mistake my smile. I take this all very seriously.”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Chamber play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Sentinel",
        points: getRandomPoints(),
      },
      {
        question:
          "Who did Chamber recommend to the VALORANT Protocol to help with power issues?",
        options: ["Sova", "Yoru", "Skye", "Neon"],
        correctAnswer: "Neon",
        points: getRandomPoints(),
      },
      {
        question: "Which is Chamber's ability?",
        options: ["Rendezvous", "Stim Beacon", "Fast Lane", "Curveball"],
        correctAnswer: "Rendezvous",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "neon",
    questions: [
      {
        question: "Where is Neon from?",
        options: ["Indonesia", "Taiwan", "Singapore", "Malaysia", "Philippines"],
        correctAnswer: "Philippines",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Neon's voice lines?\n\n“Please stay alive, I hate making new friends.”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Neon play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Duelist",
        points: getRandomPoints(),
      },
      {
        question: "LORE QUESTION (crow)",
        options: ["Crow"],
        correctAnswer: "Crow",
        points: getRandomPoints(),
      },
      {
        question: "Which is Neon's ability?",
        options: ["Overdrive", "Leer", "Blaze", "Regrowth"],
        correctAnswer: "Overdrive",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "fade",
    questions: [
      {
        question: "Where is Fade from?",
        options: ["Egypt", "Jordan", "Turkey", "Sudan", "Syria"],
        correctAnswer: "Turkey",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Fade's voice lines?\n\n“I paid a heavy price to commune with Nightmare. Don't waste it.”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Fade play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Initiator",
        points: getRandomPoints(),
      },
      {
        question: "LORE QUESTION (crow)",
        options: ["Crow"],
        correctAnswer: "Crow",
        points: getRandomPoints(),
      },
      {
        question: "Which is Fade's ability?",
        options: ["Dimensional Drift", "Turret", "Seize", "Tailwind"],
        correctAnswer: "Seize",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "harbor",
    questions: [
      {
        question: "Where is Harbor from?",
        options: ["India", "Pakistan", "Nepal", "Sri Lanka", "Bhutan"],
        correctAnswer: "India",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Harbor's voice lines?\n\n“How's everyone feeling? Good? Because you look great.”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Harbor play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Controller",
        points: getRandomPoints(),
      },
      {
        question: "LORE QUESTION (crow)",
        options: ["Crow"],
        correctAnswer: "Crow",
        points: getRandomPoints(),
      },
      {
        question: "Which is Harbor's ability?",
        options: ["Nova Pulse", "Reckoning", "Sky Smoke", "Thrash"],
        correctAnswer: "Reckoning",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "gekko",
    questions: [
      {
        question: "Where is Gekko from?",
        options: ["Mexico", "United States", "Argentina", "Brazil", "Cuba"],
        correctAnswer: "United States",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Gekko's voice lines?\n\n“Ayy, how are my buddies? No, not y'all, I'm talking about these little guys, but…yeah, what’s up?”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Gekko play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Initiator",
        points: getRandomPoints(),
      },
      {
        question: "Where is Gekko's house located?",
        options: ["Sunset", "Bind", "Icebox", "Haven"],
        correctAnswer: "Sunset",
        points: getRandomPoints(),
      },
      {
        question: "Which is Gekko's ability?",
        options: ["Double Tap", "Dizzy", "Lockdown", "Overdrive"],
        correctAnswer: "Dizzy",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "deadlock",
    questions: [
      {
        question: "Where is Deadlock from?",
        options: ["Finland", "Sweden", "Denmark", "Norway", "Poland"],
        correctAnswer: "Norway",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Deadlock's voice lines?\n\n“The greatest battles ever fought are written in storybooks. May they write about this one.”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Deadlock play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Sentinel",
        points: getRandomPoints(),
      },
      {
        question: "LORE QUESTION (crow)",
        options: ["Crow"],
        correctAnswer: "Crow",
        points: getRandomPoints(),
      },
      {
        question: "Which is Deadlock's ability?",
        options: ["Annihilation", "Dissipate", "Fakeout", "Overdrive"],
        correctAnswer: "Annihilation",
        points: getRandomPoints(),
      },
    ]
  },
  {
    agent: "iso",
    questions: [
      {
        question: "Where is Iso from?",
        options: ["Mongolia", "South Korea", "Japan", "Taiwan", "China"],
        correctAnswer: "China",
        points: getRandomPoints(),
      },
      {
        question:
          "Is this one of Iso's voice lines?\n\n“I didn't bring a snack. Did anyone bring a snack?”",
        options: ["True", "False"],
        correctAnswer: "True",
        points: getRandomPoints(),
      },
      {
        question: "What role does Iso play?",
        options: ["Controller", "Initiator", "Sentinel", "Duelist"],
        correctAnswer: "Duelist",
        points: getRandomPoints(),
      },
      {
        question: "What was Iso's original job?",
        options: ["Tax collector", "Arms dealer", "Hitman", "Retail employee"],
        correctAnswer: "Hitman",
        points: getRandomPoints(),
      },
      {
        question: "Which is Iso's ability?",
        options: ["Headhunter", "Undercut", "Blindside", "Aftershock"],
        correctAnswer: "Undercut",
        points: getRandomPoints(),
      },
    ]
  }
];

let currentPage = 0;
let totalScore = 0;
let currentAgent = -1;

// Function to render the dropdown for agent selection
function renderAgentSelection() {
  const setSelectionContainer = document.getElementById("agent-select");
  setSelectionContainer.innerHTML = `
    <label for="agent-select">Select an agent:</label>
    <select id="agent-select" onchange="selectAgent()">
      <option value="-1">Select an agent</option>
      ${quizData
        .map((set, index) => `<options value="${index}">${set.agent}</options>`)
        .join("")}
    </select>
  `;
}

// Function to select a question set
function selectAgent() {
  const agentSelect = document.getElementById("agent-select");
  currentAgent = parseInt(agentSelect.value);
  if (currentAgent !== -1) {
    renderQuizPage();
  }
}

// Function to generate random points
function getRandomPoints() {
  return Math.floor(Math.random() * 10) + 1;
}

// Override getRandomPoints to generate points based on current set
const originalGetRandomPoints = getRandomPoints;
getRandomPoints = function () {
  if (currentAgent === -1) {
    return 0; // No points for the default case
  } else {
    return originalGetRandomPoints();
  }
}

// Function to render the current quiz page
function renderQuizPage() {
  const currentQuestion = quizData[currentPage].questions[currentAgent];

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

// // Override renderQuizPage to render questions from the selected agent
// const originalRenderQuizPage = renderQuizPage;
// renderQuizPage = function () {
//   if (currentAgent === -1) {
//     renderQuizPage();
//   } else {
//     originalRenderQuizPage();
//   }
// }

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

// Override submitAnswer to handle the agent select page
const originalSubmitAnswer = submitAnswer;
submitAnswer = function () {
  if (currentAgent === -1) {
    alert("Please select an agent to proceed further!");
  } else {
    originalSubmitAnswer();
  }
}

// Function to go back 
// function goBack() {
//   currentPage--;
//   renderQuizPage();
// }

// Override the go back function
// const originalGoBack = goBack();
// goBack = function () {
//   if (currentAgent === -1) {
//     // Do nothing
//   } else {
//     originalGoBack();
//   }
// }
// Initial Render
renderQuizPage();
