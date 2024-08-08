import React, { createContext, useContext } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ abc: "hello there" }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
