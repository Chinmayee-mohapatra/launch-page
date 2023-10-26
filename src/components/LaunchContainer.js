import React, { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";

const LaunchContainer = () => {
  const [confetti, setConfetti] = useState(false);

  const config = {
    angle: 360,
    spread: 520,
    startVelocity: 50,
    elementCount: 120,
    dragFriction: 0.1,
    duration: 3000,
    stagger: 3,
    width: "8px",
    height: "20px",
    perspective: "800px",
    colors: ["#DF2769", "#AF309F", "#7C459F", "#F74D56", "#ADDDDD", "#3858A6"],
  };

  useEffect(() => {
    setConfetti(true);
  }, []);

  const clickHandler = () => {};
  return (
    <div className="relative">
      <div className="absolute -z-10 bottom-[30%] left-[50%]">
        <Confetti active={confetti} config={config} />
      </div>
      <div className="flex flex-col items-center py-16 rounded-xl bg-gradient-to-br from-[#E5B8D9] to-[#C9B8E5] dark:bg-gradient-to-br dark:from-[#49163E] dark:to-[#2B174D]">
        <h1 className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#000000]  to-[#4D4D4D] dark:bg-gradient-to-r dark:from-[#ffffff] dark:to-[#CCCCCC]">
          We are Live Now!
        </h1>
        <p className="text-[#333333] dark:text-[#CCCCCC] w-[56%] text-center text-lg my-6">
          Our new feature is now{" "}
          <span className="text-[#0f0f0f] dark:text-[#ffffff] font-bold">
            Live and Ready
          </span>{" "}
          for you to explore. Go ahead and give it a try.
        </p>
        <button
          onClick={clickHandler}
          className=" mt-10 mb-4 px-6 py-2 bg-[#0f0f0f] dark:bg-[#CCCCCC] text-[#878787] dark:text-[#0f0f0f] text-2xl font-semibold  rounded-md"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LaunchContainer;
