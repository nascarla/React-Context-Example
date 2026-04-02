import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    // Se for light, vira dark. Se for dark, vira light.
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <button onClick={toggleTheme}>Theme is currently: {theme}</button>;
};
