import React, { useContext, createContext } from "react";
import useFetch from "../hook/useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { data, isLoading, error} = useFetch("search");

  return (
    <AppContext.Provider value={{ data, isLoading, error }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };