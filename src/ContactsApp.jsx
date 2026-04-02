import "./App.css";
import React, { useContext } from "react";
import { ContactsSection } from "./components/ContactsSection.jsx";
import { ThemeArea, ThemeContext } from "./context/ThemeContext.js";
import { ThemeSwitcher } from "./context/ThemeSwitcher.js";

const family = [
  {
    name: "Finn the Human",
  },
  {
    name: "Jake the Dog",
  },
];

const friends = [
  {
    name: "Marceline",
  },
  {
    name: "Princess Bubblegum",
  },
];

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`theme-${theme}`}>
      <h1>Contacts</h1>

      <ThemeSwitcher />
      <ThemeArea initialTheme="light">
        <ContactsSection contacts={family} name="Family" />
      </ThemeArea>

      <ThemeArea initialTheme="dark">
        <ContactsSection contacts={friends} name="Friends" />
      </ThemeArea>
    </div>
  );
};

export default App;
