import React from "react";

const Timer = ({ hours, minutes, seconds }) => {
  return (
    <div className="flex items-center gap-5 md:gap-10 px-4 md:px-10 py-4 md:py-6 m-4 md:m-6 rounded-xl bg-gradient-to-br from-[#E5B8D9] to-[#C9B8E5] dark:bg-gradient-to-br dark:from-[#49163E] dark:to-[#2B174D]">
      {hours ? (
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col items-center ">
            <p className="text-3xl md:text-6xl text-[#0f0f0f]  dark:text-[#ffffff]">
              {hours < 10 ? `0${hours}` : hours}
            </p>
            <p className="text-md md:text-xl text-[#333333] dark:text-[#CCCCCC]">
              Hours
            </p>
          </div>
          <div className="text-3xl md:text-6xl text-[#333333] dark:text-[#CCCCCC]">
            {" "}
            :{" "}
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className="flex flex-col items-center ">
        <p className="text-3xl md:text-6xl text-[#0f0f0f]  dark:text-[#ffffff]">
          {minutes < 10 ? `0${minutes}` : minutes}
        </p>
        <p className="text-md md:text-xl text-[#333333] dark:text-[#CCCCCC]">
          Minutes
        </p>
      </div>
      <div className="text-3xl md:text-6xl text-[#333333] dark:text-[#CCCCCC]">
        {" "}
        :{" "}
      </div>
      <div className="flex flex-col items-center ">
        <p className="text-3xl md:text-6xl text-[#0f0f0f]  dark:text-[#ffffff]">
          {seconds < 10 ? `0${seconds}` : seconds}
        </p>
        <p className="text-md md:text-xl text-[#333333] dark:text-[#CCCCCC]">
          Seconds
        </p>
      </div>
    </div>
  );
};

export default Timer;
