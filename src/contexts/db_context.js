import { createContext, useState } from "react";
import entries from "../models/entries";

export const DBContext = createContext();

const DBContextProvider = (props) => {
  const [dbData, setDbData] = useState(entries);

  return (
    <DBContext.Provider value={{ dbData, setDbData }}>
      {props.children}
    </DBContext.Provider>
  );
};

export default DBContextProvider;
