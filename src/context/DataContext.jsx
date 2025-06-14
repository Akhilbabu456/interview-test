import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [questionCount, setQuestionCount] = useState(1);

  return (
    <DataContext.Provider
      value={{
        questionCount,
        setQuestionCount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
