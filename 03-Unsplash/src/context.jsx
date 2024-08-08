import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
