import React from "react";
import logo from "../logo.svg";
import logoDark from "../assests/logo-dark.png";
import useThemeDetector from "../utils/useThemeDetector";

const Header = () => {
  const isDarkTheme = useThemeDetector();

  return (
    <div className="w-full p-2 hover:cursor-pointer bg-white dark:bg-gradient-to-r dark:from-[#330F29] dark:to-[#090909]">
      {isDarkTheme ? (
        <img src={logoDark} alt="logo-dark" />
      ) : (
        <img src={logo} alt="logo" />
      )}
    </div>
  );
};

export default Header;
