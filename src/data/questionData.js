const questionData = [
  {
    title:
      "Read each sentence. Click on the bossy verb — the action word that tells someone what to do.",
    example: {
      sentence: "Turn off the lights",
      answer: "Turn",
      explanation: "is the bossy verb",
    },
    questions: [
      { id: "a", sentence: "Sit down on your chair.", correctAnswer: "Sit" },
      {
        id: "b",
        sentence: "Wash your hands before lunch.",
        correctAnswer: "Wash",
      },
      {
        id: "c",
        sentence: "Open your book to page five.",
        correctAnswer: "Open",
      },
      { id: "d", sentence: "Draw a big red circle.", correctAnswer: "Draw" },
      { id: "e", sentence: "Put your coat on the hook.", correctAnswer: "Put" },
      { id: "f", sentence: "Stop shouting!", correctAnswer: "Stop" },
    ],
    labels: {
      exampleLabel: "Example:",
      answerLabel: "Answer:",
      placeholder: "Click on the bossy verb",
      progressLabel: "Answered:",
      successMessage: "All answers correct! ✓",
      reviewMessage: "Some answers need review",
    },
    buttons: {
      incomplete: "Complete All Questions",
      correct: "Next Question ✓",
      submit: "Submit Answers",
    },
    alerts: {
      incomplete: "Please answer all questions before submitting.",
      success: "Excellent! All answers are correct! Moving to next question...",
      incorrect:
        "Some answers are incorrect. Please review your answers and try again.",
    },
  },
  {
    title:
      "Read each sentence. Tap the correct button to show if it is a command or a statement. If you're not sure, tap the sentence to hear it out loud!",
    example: {
      sentence: "Line up quietly",
      answer: "Line",
      explanation: "is the bossy verb",
    },
    questions: [
      {
        id: "a",
        sentence: "Come and sit on your chair.",
        correctAnswer: "Come",
      },
      {
        id: "b",
        sentence: "Clean up your room.",
        correctAnswer: "Clean",
      },
      {
        id: "c",
        sentence: "Close your book.",
        correctAnswer: "Close",
      },
      { id: "d", sentence: "Mark a big red circle.", correctAnswer: "Mark" },
      {
        id: "e",
        sentence: "Hang your coat on the hook.",
        correctAnswer: "Hang",
      },
      { id: "f", sentence: "Start shouting!", correctAnswer: "Start" },
    ],
    labels: {
      exampleLabel: "Example:",
      answerLabel: "Answer:",
      placeholder: "Click on the bossy verb",
      progressLabel: "Answered:",
      successMessage: "All answers correct! ✓",
      reviewMessage: "Some answers need review",
    },
    buttons: {
      incomplete: "Complete All Questions",
      correct: "Next Question ✓",
      submit: "Submit Answers",
    },
    alerts: {
      incomplete: "Please answer all questions before submitting.",
      success: "Excellent! All answers are correct! Moving to next question...",
      incorrect:
        "Some answers are incorrect. Please review your answers and try again.",
    },
  },
];

export default questionData;
