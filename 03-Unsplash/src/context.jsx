import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("dark-theme") === "true" ? true : false
  );
  const [searchTerm, setSearchTerm] = useState("tiger");
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("dark-theme", newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
