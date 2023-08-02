import { createContext,  } from "react";


export const AppContext = createContext();

const AppContextProvider = (props) => {

    return(
        <AppContext.Provider value={{}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider