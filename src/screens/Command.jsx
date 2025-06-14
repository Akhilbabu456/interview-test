import Header from "../components/header/Header";
import { useContext } from "react";
import DataContext from "@/context/DataContext";
import Question from "@/components/questions/Question";
import questionData from "@/data/questionData";

const Command = () => {
  const { setQuestionCount, questionCount } = useContext(DataContext);

  const currentQuestionData = questionData[questionCount - 1];

  const handleNextQuestion = () => {
    if (questionCount < questionData.length) {
      setQuestionCount(questionCount + 1);
    } else {
      setQuestionCount(1);
    }
  };

  return (
    <>
      <div className="w-full text-xl text-center bg-white font-bold text-gray-900">
        <p className="p-3">Commands</p>
      </div>
      <Header />
      <div className="flex">
        <div className="w-[40%] px-[50px]">
          <img className="w-[90%] mt-2" src="./image.jpeg" alt="" />
        </div>
        <div className="w-[60%] py-[50px]">
          <Question
            onNextQuestion={handleNextQuestion}
            questionData={currentQuestionData}
          />
        </div>
      </div>
    </>
  );
};

export default Command;
