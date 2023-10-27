import React from "react";

const Timer = ({ hours, minutes, seconds }) => {
  return (
    <div className="flex items-center gap-10 px-10 py-6 m-6 lg:m-12 rounded-xl  bg-gradient-to-br from-[#E5B8D9] to-[#C9B8E5] dark:bg-gradient-to-br dark:from-[#49163E] dark:to-[#2B174D]">
      {hours ? (
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col items-center ">
            <p className="text-4xl md:text-6xl text-[#0f0f0f]  dark:text-[#ffffff]">
              {hours}
            </p>
            <p className="text-xl text-[#333333] dark:text-[#CCCCCC]">Hours</p>
          </div>
          <div className="text-4xl md:text-6xl text-[#333333] dark:text-[#CCCCCC]">
            {" "}
            :{" "}
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className="flex flex-col items-center ">
        <p className="text-4xl md:text-6xl text-[#0f0f0f]  dark:text-[#ffffff]">
          {minutes}
        </p>
        <p className="text-xl text-[#333333] dark:text-[#CCCCCC]">Minutes</p>
      </div>
      <div className="text-4xl md:text-6xl text-[#333333] dark:text-[#CCCCCC]">
        {" "}
        :{" "}
      </div>
      <div className="flex flex-col items-center ">
        <p className="text-4xl md:text-6xl text-[#0f0f0f]  dark:text-[#ffffff]">
          {seconds}
        </p>
        <p className="text-xl text-[#333333] dark:text-[#CCCCCC]">Seconds</p>
      </div>
    </div>
  );
};

export default Timer;
