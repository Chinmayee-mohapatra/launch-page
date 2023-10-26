import React from "react";
import rocket1 from "../assests/rocket1.png";
import useThemeDetector from "../utils/useThemeDetector";
import rocket2 from "../assests/rocket2.png";
import { useSelector } from "react-redux";

const MainContent = ({ hours, minutes, seconds }) => {
  const { isTimerCompleted } = useSelector((state) => state.timer);

  const isDarkTheme = useThemeDetector();

  return (
    <div className="w-full flex flex-col flex-wrap justify-center items-center gap-4 font-poppin py-12">
      {/* Top section */}
      <div className=" flex flex-col justify-center items-center gap-10">
        <div className="flex gap-2">
          {isDarkTheme ? (
            <img src={rocket2} alt="rocket-dark" className="animate-rocket" />
          ) : (
            <img src={rocket1} alt="rocket-light" />
          )}

          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#000000]  to-[#4D4D4D] dark:bg-gradient-to-r dark:from-[#ffffff] dark:to-[#CCCCCC]">
            Launching New Module Soon!
          </h1>
        </div>
        <div className="text-[#333333] dark:text-[#CCCCCC] w-1/2 text-center text-lg">
          Exciting things are in the works! We're currently{" "}
          <span className="text-[#0f0f0f] dark:text-[#ffffff] font-bold">
            Crafting a new feature
          </span>{" "}
          for you. Keep an eye out for updates – We're working to make it
          available soon!
        </div>
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B2B2B2]  to-[#808080] dark:bg-gradient-to-r dark:from-[#ffffff] dark:to-[#cccccc]">
          GET READY FOR THE REVEAL!
        </div>
      </div>
      {/* Timer */}
      <div>
        {!isTimerCompleted && (
          <div className="flex items-center gap-10 px-10 py-6 m-12 rounded-xl  bg-gradient-to-br from-[#E5B8D9] to-[#C9B8E5] dark:bg-gradient-to-br dark:from-[#49163E] dark:to-[#2B174D]">
            {hours ? (
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col items-center ">
                  <p className="text-6xl text-[#0f0f0f]  dark:text-[#ffffff]">
                    {hours}
                  </p>
                  <p className="text-xl text-[#333333] dark:text-[#CCCCCC]">
                    Hours
                  </p>
                </div>
                <div className="text-6xl text-[#333333] dark:text-[#CCCCCC]">
                  {" "}
                  :{" "}
                </div>
              </div>
            ) : (
              <div></div>
            )}

            <div className="flex flex-col items-center ">
              <p className="text-6xl text-[#0f0f0f]  dark:text-[#ffffff]">
                {minutes}
              </p>
              <p className="text-xl text-[#333333] dark:text-[#CCCCCC]">
                Minutes
              </p>
            </div>
            <div className="text-6xl text-[#333333] dark:text-[#CCCCCC]">
              {" "}
              :{" "}
            </div>
            <div className="flex flex-col items-center ">
              <p className="text-6xl text-[#0f0f0f]  dark:text-[#ffffff]">
                {seconds}
              </p>
              <p className="text-xl text-[#333333] dark:text-[#CCCCCC]">
                Seconds
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Notify section */}
      <div className="w-full flex flex-col items-center justify-center gap-4 ">
        <p className="text-[#191919] dark:text-[#CCCCCC]">
          Be the first to know! Share your email and We'll notify you when it's
          live
        </p>
        <div className="w-full flex justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Please enter your email id"
            className="w-1/2 border-2 border-[#4d4d4d] px-2 py-3 rounded-md bg-transparent placeholder:text-[#CCCCCC]"
          />
          <button className=" bg-[#0f0f0f] dark:bg-[#CCCCCC] text-[#878787] dark:text-[#0f0f0f] text-2xl font-bold px-6 py-2 rounded-md">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
