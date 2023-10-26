import React, { useEffect } from "react";
import MainContent from "./MainContent";
import { useDispatch, useSelector } from "react-redux";
import { decrementTime } from "../utils/timerSlice";
import LaunchContainer from "./LaunchContainer";

const Body = () => {
  const dispatch = useDispatch();
  const { hours, minutes, seconds, isTimerCompleted } = useSelector(
    (state) => state.timer
  );

  useEffect(() => {
    if (!isTimerCompleted) {
      const timer = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [dispatch, isTimerCompleted]);

  return (
    <div className="w-[100vw] h-[calc(100vh-64px)] overflow-hidden -z-20 relative dark:bg-black">
      <div className="absolute -z-10 w-[38rem] h-[38rem] bg-[#FF00B8] rounded-full mix-blend-normal filter blur-3xl bg-opacity-25 animate-blob1 "></div>
      <div className="absolute -z-10 w-[38rem] h-[38rem] bg-[#772BF2] rounded-full  mix-blend-normal filter blur-3xl bg-opacity-25 animate-blob2"></div>

      {isTimerCompleted ? (
        <div className="h-full flex justify-center items-center">
          <LaunchContainer />
        </div>
      ) : (
        <MainContent hours={hours} minutes={minutes} seconds={seconds} />
      )}
    </div>
  );
};

export default Body;
