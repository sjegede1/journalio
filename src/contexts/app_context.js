import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const formatDateTime = (currentDate) => {
    let yyyy = currentDate.getFullYear();
    let mm =
      String(currentDate.getMonth() + 1).length === 1
        ? `0${currentDate.getMonth() + 1}`
        : currentDate.getMonth() + 1;
    let dd =
      String(currentDate.getDate()).length === 1
        ? `0${currentDate.getDate()}`
        : currentDate.getDate();
    let HH =
      String(currentDate.getHours()).length === 1
        ? `0${currentDate.getHours()}`
        : currentDate.getHours();
    let MM =
      String(currentDate.getMinutes()).length === 1
        ? `0${currentDate.getMinutes()}`
        : currentDate.getMinutes();
    return `${yyyy}-${mm}-${dd}T${HH}:${MM}`;
  };

  return (
    <AppContext.Provider value={{ formatDateTime, isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
