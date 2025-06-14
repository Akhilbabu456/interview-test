import { useState } from "react";

const Question = ({ onNextQuestion, questionData }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const correctAnswers = questionData.questions.reduce((acc, question) => {
    acc[question.id] = question.correctAnswer;
    return acc;
  }, {});

  const handleAnswerClick = (questionLetter, selectedWord) => {
    const isCorrect = correctAnswers[questionLetter] === selectedWord;

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionLetter]: selectedWord,
    }));
  };

  const renderClickableWords = (sentence, questionLetter) => {
    const words = sentence.split(" ");
    return (
      <span className="text-lg">
        {words.map((word, index) => {
          const cleanWord = word.replace(/[.,!?]/g, "");
          const punctuation = word.match(/[.,!?]/g)?.[0] || "";
          const isSelected = selectedAnswers[questionLetter] === cleanWord;
          const isCorrect = correctAnswers[questionLetter] === cleanWord;

          return (
            <span key={index}>
              <button
                onClick={() => handleAnswerClick(questionLetter, cleanWord)}
                className={`hover:bg-blue-100 px-1 py-0.5 rounded transition-colors ${
                  isSelected
                    ? isCorrect
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                    : "hover:bg-blue-100"
                }`}
              >
                {cleanWord}
              </button>
              {punctuation}
              {index < words.length - 1 && " "}
            </span>
          );
        })}
      </span>
    );
  };

  const checkAllAnswersCorrect = () => {
    const questionKeys = Object.keys(correctAnswers);
    return questionKeys.every(
      (key) => selectedAnswers[key] === correctAnswers[key]
    );
  };

  const areAllQuestionsAnswered = () => {
    const questionKeys = Object.keys(correctAnswers);
    return questionKeys.every((key) => selectedAnswers[key]);
  };

  const handleSubmit = () => {
    if (!areAllQuestionsAnswered()) {
      alert(questionData.alerts.incomplete);
      return;
    }

    if (checkAllAnswersCorrect()) {
      if (onNextQuestion) {
        onNextQuestion();
        setSelectedAnswers({});
      }
      alert(questionData.alerts.success);
    } else {
      alert(questionData.alerts.incorrect);
    }
  };

  const getSubmitButtonClass = () => {
    if (!areAllQuestionsAnswered()) {
      return "bg-gray-400 cursor-not-allowed";
    }
    return checkAllAnswersCorrect()
      ? "bg-green-600 hover:bg-green-700"
      : "bg-blue-600 hover:bg-blue-700";
  };

  const getSubmitButtonText = () => {
    if (!areAllQuestionsAnswered()) {
      return questionData.buttons.incomplete;
    }
    return checkAllAnswersCorrect()
      ? questionData.buttons.correct
      : questionData.buttons.submit;
  };

  return (
    <>
      <div className="flex-1">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {questionData.title}
          </h2>

          <div className="bg-gray-50 p-2 rounded-lg mb-6">
            <p className="text-[20px] mb-2">
              <span className="font-bold">
                {questionData.labels.exampleLabel}
              </span>{" "}
              "{questionData.example.sentence}"
            </p>
            <p className="text-gray-900">
              <span className="font-semibold text-[18px] text-gray-900">
                {questionData.labels.answerLabel}
              </span>{" "}
              <span className="px-1 py-1 rounded font-bold text-gray-900">
                {questionData.example.answer}
              </span>{" "}
              {questionData.example.explanation}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {questionData.questions.map((question) => (
            <div key={question.id} className="items-center">
              <div className="flex gap-3 mb-2">
                <span className="font-bold text-lg text-gray-900">
                  {question.id}.
                </span>
                {renderClickableWords(question.sentence, question.id)}
              </div>
              <div className="flex">
                <span className="text-gray-900 font-bold text-[30px]">→</span>
                <div className="border-b-2 border-gray-900 w-64 h-8 mt-[-2px] flex items-center pl-2">
                  <span className="text-gray-700">
                    {selectedAnswers[question.id] ||
                      questionData.labels.placeholder}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={!areAllQuestionsAnswered()}
            className={`px-8 py-3 text-white font-semibold rounded-lg transition-colors ${getSubmitButtonClass()}`}
          >
            {getSubmitButtonText()}
          </button>
        </div>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">
            {questionData.labels.progressLabel}{" "}
            {Object.keys(selectedAnswers).length} /{" "}
            {Object.keys(correctAnswers).length}
          </span>
          {areAllQuestionsAnswered() && (
            <div className="mt-2">
              <span
                className={`text-sm font-medium ${
                  checkAllAnswersCorrect() ? "text-green-600" : "text-red-600"
                }`}
              >
                {checkAllAnswersCorrect()
                  ? questionData.labels.successMessage
                  : questionData.labels.reviewMessage}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Question;
