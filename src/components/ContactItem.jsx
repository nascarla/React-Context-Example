import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

export const ContactItem = ({ name }) => {
  const { theme } = useContext(ThemeContext);

  return <div className={`contact-item ${theme}`}>{name}</div>;
};
