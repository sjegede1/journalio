import { createContext,  } from "react";


export const SqlContext = createContext();

const SqlContextProvider = (props) => {

    return(
        <SqlContext.Provider value={{}}>
            {props.children}
        </SqlContext.Provider>
    )
}

export default SqlContextProvider