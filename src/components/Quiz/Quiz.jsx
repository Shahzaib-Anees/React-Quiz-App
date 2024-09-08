import "./Quiz.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    async function getQuestions() {
      const response = await axios("https://the-trivia-api.com/v2/questions");
      const data = response.data;
      await setQuestions(data);
      console.log(data);
    }
    getQuestions(questionIndex);
  }, []);

  const shuffleOptions = (array) => {
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  function increaseQuestionIndex() {
    let userAnswer = document.querySelector("input[name='option']:checked");
    if (questions[questionIndex].correctAnswer === userAnswer.value) {
      setCorrectAnswerCount((prev) => {
        return prev + 1;
      });
    }
    setQuestionIndex(questionIndex + 1);
    if (questionIndex === questions.length - 1) {
      localStorage.setItem("correctAnswerCount", correctAnswerCount);
      navigate("/Result");
      return;
    }
  }

  return (
    <>
      <article className="quiz-container h-[fir-content] px-2 py-20 flex items-center justify-center w-full">
        <div className="quiz-question-container p-6 h-[fit-content] w-[80%]">
          {questions.length > 0 ? (
            <div>
              <div className="flex flex-col gap-2">
                <p className="text-[#101010] font-semibold text-[20px] bg-[#fbfbfb] w-[fit-content] p-2 rounded">
                  Question no
                  <span className="px-2">
                    {questionIndex + 1 < 10
                      ? "0" + (questionIndex + 1)
                      : questionIndex + 1}
                  </span>
                </p>
                <p className="question text-[#101010] font-bold text-[20px] w-full py-3 px-4 rounded">
                  {questions[questionIndex]?.question.text}
                </p>
              </div>
              <div className="option-container mt-4 py-5 flex flex-col gap-4">
                {shuffleOptions([
                  ...questions[questionIndex].incorrectAnswers,
                  questions[questionIndex].correctAnswer,
                ]).map((option, index) => {
                  return (
                    <div
                      key={index}
                      className="options flex items-center gap-2"
                    >
                      <input
                        type="radio"
                        name="option"
                        value={option}
                        id={option}
                        className="option-input"
                      />
                      <label
                        htmlFor={option}
                        className="option-label text-[#101010] font-semibold text-[16px]"
                      >
                        {option}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <h1 className="text-2xl font-bold text-center">
              Loading Question ....
            </h1>
          )}
          <div className="flex flex-col w-full mt-2">
            <button
              onClick={increaseQuestionIndex}
              className="self-end w-[fit-content] button bg-[#57A4FF] py-1 px-4 text-[#ffff] font-bold rounded mt-1"
            >
              Next
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

export default Quiz;
