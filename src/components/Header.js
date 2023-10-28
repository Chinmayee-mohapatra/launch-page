import React from "react";
import logo from "../logo.svg";
import logoDark from "../assests/logo-dark.png";
import useThemeDetector from "../utils/useThemeDetector";

const Header = () => {
  const isDarkTheme = useThemeDetector();

  return (
    <div className="w-full py-2 px-4 flex justify-between bg-white dark:bg-gradient-to-r dark:from-[#330F29] dark:to-[#090909]">
      {isDarkTheme ? (
        <img src={logoDark} alt="logo-dark" className="w-3/4 md:w-fit" />
      ) : (
        <img src={logo} alt="logo" className="w-3/4 md:w-fit" />
      )}
    </div>
  );
};

export default Header;
