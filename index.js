const quizData = [
  //BRIMSTONE

  {
    agent: "Brimstone",
    question: "Where is Brimstone from?",
    options: ["America", "Australia", "Canada", "Germany", "Russia"],
    correctAnswer: "America",
    points: getRandomPoints(),
  },
  {
    agent: "Brimstone",
    question:
      "Is this one of Brimstone's voice lines? \"Drink some water, reload your mags, and let's get back out there.\"",
    options: ["True", "False", "None"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Brimstone",
    question: "What role does Brimstone play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Controller",
    points: getRandomPoints(),
  },
  {
    agent: "Brimstone",
    question:
      "In the lore, who joined the VALORANT Protocol first alongside Brimstone? ",
    options: ["KAYO", "Astra", "Viper", "Raze"],
    correctAnswer: "Viper",
    points: getRandomPoints(),
  },
  {
    agent: "Brimstone",
    question: "Which is Brimstone’s ability?",
    options: ["Owl Drone", "Kill Contract", "Annihilation", "Incendiary"],
    correctAnswer: "Incendiary",
    points: getRandomPoints(),
  },

  // PHOENIX

  {
    agent: "Phoenix",
    question: "Where is Phoenix from?",
    options: ["Denmark", "Poland", "United Kingdom", "New Zealand", "America"],
    correctAnswer: "United Kingdom",
    points: getRandomPoints(),
  },
  {
    agent: "Phoenix",
    question:
      "Is this one of Phoenix’s voice lines? “Ooh, that’s going on a highlight reel for sure!”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Phoenix",
    question: "What role does Phoenix play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Duelist",
    points: getRandomPoints(),
  },
  {
    agent: "Phoenix",
    question: "What did Phoenix go to school for?",
    options: ["Finance", "Fashion", "Performing Arts", "Dance"],
    correctAnswer: "Performing Arts",
    points: getRandomPoints(),
  },
  {
    agent: "Phoenix",
    question: "Which is Phoenix’s ability?",
    options: ["Hot Hands", "Hunter’s Fury", "Trapwire", "Reckoning"],
    correctAnswer: "Hot Hands",
    points: getRandomPoints(),
  },

  // SAGE

  {
    agent: "Sage",
    question: "Where is Sage from?",
    options: ["Philippines", "Malaysia", "Japan", "Korea", "China"],
    correctAnswer: "China",
    points: getRandomPoints(),
  },
  {
    agent: "Sage",
    question:
      "Is this one of Sage’s voice lines?\n\n“I wasn’t strong enough before. But now, now I am strong enough for us all”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Sage",
    question: "What role does Sage play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Sentinel",
    points: getRandomPoints(),
  },
  {
    agent: "Sage",
    question: "LORE QUESTION (crow)",
    options: ["Crow"],
    correctAnswer: "Crow",
    points: getRandomPoints(),
  },
  {
    agent: "Sage",
    question: "Which is Sage’s ability?",
    options: ["Showstopper", "Resurrection", "Regrowth", "Dismiss"],
    correctAnswer: "Resurrection",
    points: getRandomPoints(),
  },

  //SOVA

  {
    agent: "Sova",
    question: "Where is Sova from?",
    options: ["Russia", "Germany", "Sweden", "Canada", "Serbia"],
    correctAnswer: "Russia",
    points: getRandomPoints(),
  },
  {
    agent: "Sova",
    question:
      "Is this one of Sova’s voice lines?\n\n“I believe in all of you, like I believe in myself.”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Sova",
    question: "What role does Sova play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Initiator",
    points: getRandomPoints(),
  },
  {
    agent: "Sova",
    question: "LORE QUESTION (crow)",
    options: ["Crow"],
    correctAnswer: "Crow",
    points: getRandomPoints(),
  },
  {
    agent: "Sova",
    question: "Which is Sova’s ability?",
    options: ["Seekers", "Wingman", "Owl Drone", "Prowler"],
    correctAnswer: "Owl Drone",
    points: getRandomPoints(),
  },

  //Viper

  {
    agent: "Viper",
    question: "Where is Viper from?",
    options: ["Greece", "Canada", "Russia", "America", "Netherlands"],
    correctAnswer: "America",
    points: getRandomPoints(),
  },
  {
    agent: "Viper",
    question:
      "Is this one of Viper’s voice lines?\n\n“If any of you die, I lose a bet with Brimstone, so don’t embarrass me like that, please.”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Viper",
    question: "What role does Viper play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Controller",
    points: getRandomPoints(),
  },
  {
    agent: "Viper",
    question: "LORE QUESTION (crow)",
    options: ["Crow"],
    correctAnswer: "Crow",
    points: getRandomPoints(),
  },
  {
    agent: "Viper",
    question: "Which is Viper’s ability?",
    options: ["Snake Bite", "Recon Bolt", "Leer", "Curveball"],
    correctAnswer: "Snake Bite",
    points: getRandomPoints(),
  },

  //CYPHER

  {
    agent: "Cypher",
    question: "Where is Cypher from?",
    options: ["Egypt", "Spain", "Algeria", "Morocco", "Portugal"],
    correctAnswer: "Morocco",
    points: getRandomPoints(),
  },
  {
    agent: "Cypher",
    question:
      "Is this one of Cypher’s voice lines?\n\n“What has Kingdom done to this town?! However pretty their lies are, they’re just sucking my city dry!”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Cypher",
    question: "What role does Cypher play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Sentinel",
    points: getRandomPoints(),
  },
  {
    agent: "Cypher",
    question: "What is Cypher’s biggest fear?",
    options: ["Bugs", "Being watched", "Viper", "The dark"],
    correctAnswer: "Being watched",
    points: getRandomPoints(),
  },
  {
    agent: "Cypher",
    question: "Which is Cypher’s ability?",
    options: ["Dismiss", "Showstopper", "Fakeout", "Neural Theft"],
    correctAnswer: "Neural Theft",
    points: getRandomPoints(),
  },

  //REYNA

  {
    agent: "Reyna",
    question: "Where is Reyna from?",
    options: ["Mexico", "Brazil", "Portugal", "Costa Rica", "Puerto Rico"],
    correctAnswer: "Mexico",
    points: getRandomPoints(),
  },
  {
    agent: "Reyna",
    question:
      "Is this one of Reyna’s voice lines?\n\n“I have lied, beaten, killed to survive. I will kill again and again if it means one more day.”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Reyna",
    question: "What role does Reyna play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Duelist",
    points: getRandomPoints(),
  },
  {
    agent: "Reyna",
    question: "LORE QUESTION (crow)",
    options: ["Crow"],
    correctAnswer: "Crow",
    points: getRandomPoints(),
  },
  {
    agent: "Reyna",
    question: "Which is Reyna’s ability?",
    options: ["Paranoia", "Empress", "Blaze", "Trailblazer"],
    correctAnswer: "Empress",
    points: getRandomPoints(),
  },

  //KILLJOY

  {
    agent: "Killjoy",
    question: "Where is Killjoy from?",
    options: ["Austria", "Norway", "Ireland", "Germany", "Sweden"],
    correctAnswer: "Germany",
    points: getRandomPoints(),
  },
  {
    agent: "Killjoy",
    question:
      "Is this one of Killjoy’s voice lines?\n\n“Don’t worry team. If you die, I have your memories backed up at base! Heh, just kidding, just kidding. Or am I?”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Killjoy",
    question: "What role does Killjoy play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Sentinel",
    points: getRandomPoints(),
  },
  {
    agent: "Killjoy",
    question: "LORE QUESTION (crow)",
    options: ["Crow"],
    correctAnswer: "Crow",
    points: getRandomPoints(),
  },
  {
    agent: "Killjoy",
    question: "Which is Killjoy’s ability?",
    options: ["Nanoswarm", "Blade Storm", "Undercut", "Overdrive"],
    correctAnswer: "Nanoswarm",
    points: getRandomPoints(),
  },

  //BREACH

  {
    agent: "Breach",
    question: "Where is Breach from?",
    options: ["America", "Sweden", "Norway", "Iceland", "Netherlands"],
    correctAnswer: "Sweden",
    points: getRandomPoints(),
  },
  {
    agent: "Breach",
    question:
      "Is this one of Breach’s voice lines?\n\n“Just swapping in new fusion cells. Okay, my arms are good! We can go.”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Breach",
    question: "What role does Breach play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Initiator",
    points: getRandomPoints(),
  },
  {
    agent: "Breach",
    question: "LORE QUESTION (crow)",
    options: ["Crow"],
    correctAnswer: "Crow",
    points: getRandomPoints(),
  },
  {
    agent: "Breach",
    question: "Which is Breach’s ability?",
    options: ["Wingman", "Rolling Thunder", "Cove", "Contingency"],
    correctAnswer: "Rolling Thunder",
    points: getRandomPoints(),
  },

  //OMEN

  {
    agent: "Omen",
    question: "Where is Omen from?",
    options: ["Your nightmares", "Unknown", "The shadows", "Valorant LFG"],
    correctAnswer: "Unknown",
    points: getRandomPoints(),
  },
  {
    agent: "Omen",
    question:
      "Is this one of Omen’s voice lines?\n\n“They fear death, they should fear so much more than that.”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Omen",
    question: "What role does Omen play?",
    options: ["Initiator", "Sentinel", "Duelist", "Controller"],
    correctAnswer: "Controller",
    points: getRandomPoints(),
  },
  {
    agent: "Omen",
    question: "LORE QUESTION (crow)",
    options: ["Crow"],
    correctAnswer: "Crow",
    points: getRandomPoints(),
  },
  {
    agent: "Omen",
    question: "Which is Omen’s ability?",
    options: ["Mosh Pit", "Double Tap", "Dark Cover", "Cloudburst"],
    correctAnswer: "Dark Cover",
    points: getRandomPoints(),
  },

  //JETT

  {
    agent: "Jett",
    question: "Where is Jett from?",
    options: ["America", "Japan", "Singapore", "Korea", "Sweden"],
    correctAnswer: "Korea",
    points: getRandomPoints(),
  },
  {
    agent: "Jett",
    question:
      "Is this one of Jett’s voice lines?\n\n“Ha! You should’ve seen your faces!”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Jett",
    question: "What role does Jett play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Duelist",
    points: getRandomPoints(),
  },
  {
    agent: "Jett",
    question: "LORE QUESTION (crow)",
    options: ["Crow"],
    correctAnswer: "Crow",
    points: getRandomPoints(),
  },
  {
    agent: "Jett",
    question: "Which is Jett’s ability?",
    options: ["Updraft", "Sonic Sensor", "Trapwire", "Barrier Mesh"],
    correctAnswer: "Updraft",
    points: getRandomPoints(),
  },

  //RAZE

  {
    agent: "Raze",
    question: "Where is Raze from?",
    options: ["Brazil", "Portugal", "Spain", "Mexico", "Peru"],
    correctAnswer: "Brazil",
    points: getRandomPoints(),
  },
  {
    agent: "Raze",
    question:
      "Is this one of Raze’s voice lines?\n\n“You can take the girl out of Salvador, but you’ll never take the girl out of Salvador. Wait…”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Raze",
    question: "What role does Raze play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Duelist",
    points: getRandomPoints(),
  },
  {
    agent: "Raze",
    question: "LORE QUESTION (crow)",
    options: ["Crow"],
    correctAnswer: "Crow",
    points: getRandomPoints(),
  },
  {
    agent: "Raze",
    question: "Which is Raze’s ability?",
    options: ["Cyber Cage", "Boom Bot", "Haunt", "Cloudburst"],
    correctAnswer: "Boom Bot",
    points: getRandomPoints(),
  },

  //SKYE

  {
    agent: "Skye",
    question: "Where is Skye from?",
    options: ["New Zealand", "Canada", "Greece", "America", "Australia"],
    correctAnswer: "Australia",
    points: getRandomPoints(),
  },
  {
    agent: "Skye",
    question:
      "Is this one of Skye’s voice lines?\n\n“If you see one of my creatures, it’s a good thing, alright? You’ll figure out what they do eventually.”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Skye",
    question: "What role does Skye play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Initiator",
    points: getRandomPoints(),
  },
  {
    agent: "Skye",
    question: "LORE QUESTION (crow)",
    options: ["Crow"],
    correctAnswer: "Crow",
    points: getRandomPoints(),
  },
  {
    agent: "Skye",
    question: "Which is Skye’s ability?",
    options: ["Spy Cam", "Prowler", "Seekers", "Fault Lines"],
    correctAnswer: "Seekers",
    points: getRandomPoints(),
  },

  //YORU

  {
    agent: "Yoru",
    question: "Where is Yoru from?",
    options: ["Malaysia", "China", "Japan", "Korea", "Vietnam"],
    correctAnswer: "Japan",
    points: getRandomPoints(),
  },
  {
    agent: "Yoru",
    question:
      "Is this one of Yoru’s voice lines?\n\n“Pick something nice to kill them with. It’s the least we can do.”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Yoru",
    question: "What role does Yoru play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Duelist",
    points: getRandomPoints(),
  },
  {
    agent: "Yoru",
    question: "LORE QUESTION (crow)",
    options: ["Crow"],
    correctAnswer: "Crow",
    points: getRandomPoints(),
  },
  {
    agent: "Yoru",
    question: "Which is Yoru’s ability?",
    options: ["Headhunter", "Incendiary", "Undercut", "Gatecrash"],
    correctAnswer: "Gatecrash",
    points: getRandomPoints(),
  },

  //ASTRA

  {
    agent: "Astra",
    question: "Where is Astra from?",
    options: ["Nigeria", "Ghana", "Kenya", "Madagascar", "Botswana"],
    correctAnswer: "Ghana",
    points: getRandomPoints(),
  },
  {
    agent: "Astra",
    question:
      "Is this one of Astra’s voice lines?\n\n“Take a breath now. Release the tension. Good? Let’s go!”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Astra",
    question: "What role does Astra play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Controller",
    points: getRandomPoints(),
  },
  {
    agent: "Astra",
    question: "LORE QUESTION (crow)",
    options: ["Crow"],
    correctAnswer: "Crow",
    points: getRandomPoints(),
  },
  {
    agent: "Astra",
    question: "Which is Astra’s ability?",
    options: ["Dark Cover", "Showstopper", "Devour", "Nebula"],
    correctAnswer: "Nebula",
    points: getRandomPoints(),
  },

  //KAYO

  {
    agent: "KAYO",
    question: "Where is KAYO from?",
    options: ["AI", "machines???", "Killjoy", "Alternate Future"],
    correctAnswer: "Alternate Future",
    points: getRandomPoints(),
  },
  {
    agent: "KAYO",
    question:
      "Is this one of KAYO’s voice lines?\n\n“I’ll survive a dent or two, can’t say the same for you fragile humans.”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "KAYO",
    question: "What role does KAYO play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Initiator",
    points: getRandomPoints(),
  },
  {
    agent: "KAYO",
    question:
      "KAYO fought alongside Radiants in the Human-Radiant War. True or false?",
    options: ["True", "False"],
    correctAnswer: "False",
    points: getRandomPoints(),
  },
  {
    agent: "KAYO",
    question: "Which is KAYO’s ability?",
    options: ["Aftershock", "Rendezvous", "Boom Bot", "Null/Cmd"],
    correctAnswer: "Null/Cmd",
    points: getRandomPoints(),
  },

  //CHAMBER

  {
    agent: "Chamber",
    question: "Where is Chamber from?",
    options: ["Canada", "Italy", "Belgium", "France", "Ireland"],
    correctAnswer: "France",
    points: getRandomPoints(),
  },
  {
    agent: "Chamber",
    question:
      "Is this one of Chamber’s voice lines?\n\n“Please do not mistake my smile. I take this all very seriously.”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Chamber",
    question: "What role does Chamber play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Sentinel",
    points: getRandomPoints(),
  },
  {
    agent: "Chamber",
    question:
      "Who did Chamber recommend to the VALORANT Protocol to help with power issues?",
    options: ["Sova", "Yoru", "Skye", "Neon"],
    correctAnswer: "Neon",
    points: getRandomPoints(),
  },
  {
    agent: "Chamber",
    question: "Which is Chamber’s ability?",
    options: ["Rendezvous", "Stim Beacon", "Fast Lane", "Curveball"],
    correctAnswer: "Rendezvous",
    points: getRandomPoints(),
  },

  //NEON

  {
    agent: "Neon",
    question: "Where is Neon from?",
    options: ["Indonesia", "Taiwan", "Singapore", "Malaysia", "Philippines"],
    correctAnswer: "Philippines",
    points: getRandomPoints(),
  },
  {
    agent: "Neon",
    question:
      "Is this one of Neon’s voice lines?\n\n“Please stay alive, I hate making new friends.”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Neon",
    question: "What role does Neon play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Duelist",
    points: getRandomPoints(),
  },
  {
    agent: "Neon",
    question: "LORE QUESTION (crow)",
    options: ["Crow"],
    correctAnswer: "Crow",
    points: getRandomPoints(),
  },
  {
    agent: "Neon",
    question: "Which is Neon’s ability?",
    options: ["Overdrive", "Leer", "Blaze", "Regrowth"],
    correctAnswer: "Overdrive",
    points: getRandomPoints(),
  },

  //FADE

  {
    agent: "Fade",
    question: "Where is Fade from?",
    options: ["Egypt", "Jordan", "Turkey", "Sudan", "Syria"],
    correctAnswer: "Turkey",
    points: getRandomPoints(),
  },
  {
    agent: "Fade",
    question:
      "Is this one of Fade’s voice lines?\n\n“I paid a heavy price to commune with Nightmare. Don’t waste it.”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Fade",
    question: "What role does Fade play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Initiator",
    points: getRandomPoints(),
  },
  {
    agent: "Fade",
    question: "LORE QUESTION (crow)",
    options: ["Crow"],
    correctAnswer: "Crow",
    points: getRandomPoints(),
  },
  {
    agent: "Fade",
    question: "Which is Fade’s ability?",
    options: ["Dimensional Drift", "Turret", "Seize", "Tailwind"],
    correctAnswer: "Seize",
    points: getRandomPoints(),
  },

  //HARBOR

  {
    agent: "Harbor",
    question: "Where is Harbor from?",
    options: ["India", "Pakistan", "Nepal", "Sri Lanka", "Bhutan"],
    correctAnswer: "India",
    points: getRandomPoints(),
  },
  {
    agent: "Harbor",
    question:
      "Is this one of Harbor’s voice lines?\n\n“How’s everyone feeling? Good? Because you look great.”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Harbor",
    question: "What role does Harbor play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Controller",
    points: getRandomPoints(),
  },
  {
    agent: "Harbor",
    question: "LORE QUESTION (crow)",
    options: ["Crow"],
    correctAnswer: "Crow",
    points: getRandomPoints(),
  },
  {
    agent: "Harbor",
    question: "Which is Harbor’s ability?",
    options: ["Nova Pulse", "Reckoning", "Sky Smoke", "Thrash"],
    correctAnswer: "Reckoning",
    points: getRandomPoints(),
  },

  //GEKKO

  {
    agent: "Gekko",
    question: "Where is Gekko from?",
    options: ["Mexico", "United States", "Argentina", "Brazil", "Cuba"],
    correctAnswer: "United States",
    points: getRandomPoints(),
  },
  {
    agent: "Gekko",
    question:
      "Is this one of Gekko’s voice lines?\n\n“Ayy, how are my buddies? No, not y’all, I’m talking about these little guys, but…yeah, what’s up?”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Gekko",
    question: "What role does Gekko play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Initiator",
    points: getRandomPoints(),
  },
  {
    agent: "Gekko",
    question: "Where is Gekko's house located?",
    options: ["Sunset", "Bind", "Icebox", "Haven"],
    correctAnswer: "Sunset",
    points: getRandomPoints(),
  },
  {
    agent: "Gekko",
    question: "Which is Gekko’s ability?",
    options: ["Double Tap", "Dizzy", "Lockdown", "Overdrive"],
    correctAnswer: "Dizzy",
    points: getRandomPoints(),
  },

  //DEADLOCK

  {
    agent: "Deadlock",
    question: "Where is Deadlock from?",
    options: ["Finland", "Sweden", "Denmark", "Norway", "Poland"],
    correctAnswer: "Norway",
    points: getRandomPoints(),
  },
  {
    agent: "Deadlock",
    question:
      "Is this one of Deadlock’s voice lines?\n\n“The greatest battles ever fought are written in storybooks. May they write about this one.”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Deadlock",
    question: "What role does Deadlock play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Sentinel",
    points: getRandomPoints(),
  },
  {
    agent: "Deadlock",
    question: "LORE QUESTION (crow)",
    options: ["Crow"],
    correctAnswer: "Crow",
    points: getRandomPoints(),
  },
  {
    agent: "Deadlock",
    question: "Which is Deadlock’s ability?",
    options: ["Annihilation", "Dissipate", "Fakeout", "Overdrive"],
    correctAnswer: "Annihilation",
    points: getRandomPoints(),
  },

  //ISO

  {
    agent: "Iso",
    question: "Where is Iso from?",
    options: ["Mongolia", "South Korea", "Japan", "Taiwan", "China"],
    correctAnswer: "China",
    points: getRandomPoints(),
  },
  {
    agent: "Iso",
    question:
      "Is this one of Iso’s voice lines?\n\n“I didn’t bring a snack. Did anyone bring a snack?”",
    options: ["True", "False"],
    correctAnswer: "True",
    points: getRandomPoints(),
  },
  {
    agent: "Iso",
    question: "What role does Iso play?",
    options: ["Controller", "Initiator", "Sentinel", "Duelist"],
    correctAnswer: "Duelist",
    points: getRandomPoints(),
  },
  {
    agent: "Iso",
    question: "What was Iso’s original job?",
    options: ["Tax collector", "Arms dealer", "Hitman", "Retail employee"],
    correctAnswer: "Hitman",
    points: getRandomPoints(),
  },
  {
    agent: "Iso",
    question: "Which is Iso’s ability?",
    options: ["Headhunter", "Undercut", "Blindside", "Aftershock"],
    correctAnswer: "Undercut",
    points: getRandomPoints(),
  },
];

// index.js
let currentPage = 0;
let totalScore = 0;
let filteredQuestions = [];

function getRandomPoints() {
  return Math.floor(Math.random() * 10) + 1;
}

function startQuiz() {
  // Make sure the quiz container is visible
  const quizContainer = document.getElementById("quiz");
  quizContainer.style.display = "block";
  renderQuizPage();
}

function showAgentOverlay(agentName) {
  // Assuming you have images named after the agents in lowercase in the ./media/agents/ directory
  const agentImage = document.getElementById('agentImage');
  agentImage.src = `./media/agents/${agentName.toLowerCase()}.png`;
  agentImage.alt = agentName;

  // Display the overlay
  const overlay = document.getElementById('agentOverlay');
  overlay.style.display = 'flex';
}

function selectAgent(agentName) {
  filteredQuestions = quizData.filter(
    (question) => question.agent === agentName
  );
  currentPage = 0;
  totalScore = 0;

  // Hide the agent selection grid
  document.getElementById("agentSelection").style.display = "none";

  // Show the overlay with the agent's image
  showAgentOverlay(agentName);
}

function renderAgentSelection() {
  const uniqueAgents = [...new Set(quizData.map((question) => question.agent))];
  const selectionContainer = document.getElementById("agentSelection");
  selectionContainer.innerHTML = `<div class="agent-grid"></div>`;
  const gridContainer = selectionContainer.querySelector(".agent-grid");

  uniqueAgents.forEach((agent) => {
    const imgElement = document.createElement("img");
    imgElement.src = `./media/icons/${agent.toLowerCase()}.webp`;
    imgElement.alt = agent;
    imgElement.classList.add("agent-img");
    imgElement.onclick = () => selectAgent(agent);
    gridContainer.appendChild(imgElement);
  });
}

function renderQuizPage() {
  const quizContainer = document.getElementById("quiz");
  const currentQuestion = filteredQuestions[currentPage];

  if (currentQuestion) {
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
      <button onclick="submitAnswer()">Next</button>
    `;
  } else {
    alert(`Quiz completed! Total score: ${totalScore}`);
    document.getElementById("quiz").style.display = "none"; // Hide the quiz container
    document.getElementById("agentSelection").style.display = "flex"; // Show the agent selection again
    renderAgentSelection(); // Optionally reset to agent selection
  }
}

function submitAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    const userAnswer = selectedAnswer.value;
    if (userAnswer === filteredQuestions[currentPage].correctAnswer) {
      totalScore += filteredQuestions[currentPage].points;
    }
    currentPage++;
    renderQuizPage();
  } else {
    alert("Please select an option before proceeding further!");
  }
}

// Function to show the agent selection screen
function showAgentSelection() {
  document.getElementById("agentOverlay").style.display = "none";
  document.getElementById("agentSelection").style.display = "flex"; // or "block" depending on your layout
  document.getElementById("quiz").style.display = "none"; // Hide quiz if it's visible
}

// Event listener for the back button
document.getElementById('backButton').addEventListener('click', function() {
  showAgentSelection();
});

// Event listener for the lock in button
document.getElementById('lockInButton').addEventListener('click', function() {
  // Hide the agent overlay
  document.getElementById('agentOverlay').style.display = 'none';

  // Start the quiz
  startQuiz();
});

// Initial call to render agent selection screen
renderAgentSelection();
