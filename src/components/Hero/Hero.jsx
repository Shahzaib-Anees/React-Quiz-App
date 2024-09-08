import {Link} from "react-router-dom";
import "./Hero.css"
function Hero() {
  return (
    <>
      <article className = "px-8 py-14 flex flex-col items-center justify-center gap-[12px] h-[80vh]">
        <h1 className="text-3xl font-bold text-center">Welcome to React Quiz Application</h1>
        <p className="text-2xl text-[#343434] text-center font-semibold">
          Are you ready to test your knowledge? <br/> let's get started! with
          our Quiz App!
        </p>
        <Link to="/Quiz" className="button bg-[#57A4FF] py-2 px-3 text-[#ffff] font-bold rounded mt-1" style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}>
            Get Started
        </Link>
      </article>
    </>
  );
}

export default Hero;
