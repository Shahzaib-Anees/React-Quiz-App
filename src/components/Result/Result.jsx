import "./Result.css";
import {Link} from "react-router-dom";
function Result() {
  const userScore = localStorage.getItem("correctAnswerCount");
  return (
    <>
      <article className="h-[fir-content] px-2 py-20 flex items-center justify-center w-full">
        <div className="result-container flex flex-col items-center justify-center gap-5 p-6 h-[fit-content] w-[80%]">
          <h1 className="text-3xl text-[#1874ff] font-bold">Result</h1>
          <p className="text-4xl text-center font-bold">
            {userScore > 3 && userScore < 7
              ? "'Good Job !'"
              : userScore > 7 && userScore <= 10
              ? `'You are Really Smart ,
                 Keep it Up !'`
              : "'Better Luck Next Time !'"}
          </p>
          <p className="text-xl text-[#4b4b4b] text-center font-semibold">You have give {userScore} Correct Answers out of 10 Questions .</p>
          <Link className="button button bg-[#57A4FF] py-2 px-3 text-[#ffff] font-bold rounded mt-1" style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }} to="/Quiz">Play Again</Link>
        </div>
      </article>
    </>
  );
}

export default Result;
