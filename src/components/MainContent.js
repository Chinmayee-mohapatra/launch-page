import React from "react";
import rocket1 from "../assests/rocket1.png";
import useThemeDetector from "../utils/useThemeDetector";
import rocket2 from "../assests/rocket2.png";
import { useDispatch, useSelector } from "react-redux";
import Timer from "./Timer";
import { useState } from "react";
import { userEmail } from "../utils/userSlice";
import { TiTick } from "react-icons/ti";
import Loader from "./Loader";

const MainContent = ({ hours, minutes, seconds }) => {
  const dispatch = useDispatch();
  const isDarkTheme = useThemeDetector();

  const { isTimerCompleted } = useSelector((state) => state.timer);

  const [inputEmail, setInputEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isTimerVisible, setIsTimerVisible] = useState(false);

  const emails = useSelector((state) => state.user.emails);

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setInputEmail(inputValue);
    setIsButtonDisabled(inputValue === "");

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsEmailValid(emailPattern.test(inputValue));

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (inputValue && isEmailValid) {
        setIsButtonDisabled(false);
      }
    }, 1000);
  };

  const handleNotifyClick = () => {
    if (inputEmail) {
      if (emails.includes(inputEmail)) {
        alert("Email already exists! Try with another email.");
      } else {
        dispatch(userEmail(inputEmail));
        setInputEmail("");
        setIsEmailValid(false);
      }
    }
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setIsTimerVisible(true);
    } else {
      setIsTimerVisible(false);
    }
  };

  return (
    <div className="w-full flex flex-col flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap4 font-poppin py-6 lg:py-12">
      {/* Top section */}
      <div className=" flex flex-col justify-center items-center gap-4 md:gap-10">
        <div className="flex gap-2">
          {isDarkTheme ? (
            <img
              src={rocket2}
              alt="rocket-dark"
              className="w-8 h-8 md:w-20 md:h-20 animate-rocket"
            />
          ) : (
            <img
              src={rocket1}
              alt="rocket-light"
              className="w-8 h-8 md:w-20 md:h-20 animate-rocket "
            />
          )}

          <h1 className="text-2xl md:text-5xl font-bold md:font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#000000]  to-[#4D4D4D] dark:bg-gradient-to-r dark:from-[#ffffff] dark:to-[#CCCCCC]">
            Launching New Module Soon!
          </h1>
        </div>
        <div className="text-[#333333] dark:text-[#CCCCCC] w-3/4 md:w-1/2 text-center text-sm md:text-lg">
          Exciting things are in the works! We're currently{" "}
          <span className="text-[#0f0f0f] dark:text-[#ffffff] font-semibold md:font-bold">
            Crafting a new feature
          </span>{" "}
          for you. Keep an eye out for updates – We're working to make it
          available soon!
        </div>
        <div className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B2B2B2]  to-[#808080] dark:bg-gradient-to-r dark:from-[#ffffff] dark:to-[#cccccc]">
          GET READY FOR THE REVEAL!
        </div>
      </div>

      {/* Timer toggle button */}
      <div className="mt-2 md:mt-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            onChange={handleCheckboxChange}
            type="checkbox"
            value=""
            className="sr-only peer"
          ></input>
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#49163E] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2.5px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#49163E]"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Timer
          </span>
        </label>
      </div>
      {/* Timer */}
      {isTimerVisible && (
        <div>
          {!isTimerCompleted && (
            <Timer hours={hours} minutes={minutes} seconds={seconds} />
          )}
        </div>
      )}

      {/* Notify section */}
      <div className="w-full flex flex-col items-center justify-center text-sm md:text-base gap-4 ">
        <p className=" text-center w-2/3 md:w-full text-[#191919] dark:text-[#CCCCCC]">
          Be the first to know! Share your email and We'll notify you when it's
          live.
        </p>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
          <input
            type="email"
            placeholder="Please enter your email id"
            value={inputEmail}
            onChange={handleEmailChange}
            className="w-3/4 md:w-1/2 border-2 border-[#4d4d4d] px-2 py-3 rounded-md bg-transparent placeholder:text-[#878787] dark:placeholder:text-[#CCCCCC]"
          />
          <button
            onClick={handleNotifyClick}
            className={
              isButtonDisabled
                ? "hover:cursor-wait bg-[#0f0f0f] dark:bg-[#CCCCCC] text-[#878787] dark:text-[#0f0f0f] text-xl md:text-2xl font-bold px-6 py-2 rounded-md"
                : `hover:cursor-pointer bg-[#0f0f0f] dark:bg-[#CCCCCC] text-[#FFFFFF] dark:text-[#0f0f0f] text-xl md:text-2xl font-bold px-6 py-2 rounded-md`
            }
          >
            {isLoading ? (
              <Loader />
            ) : isButtonDisabled ? (
              "Notify Me"
            ) : isEmailValid ? (
              <TiTick size={36} />
            ) : (
              "Notify Me"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
