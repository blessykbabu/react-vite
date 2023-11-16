import { useContext,createContext,useState } from "react";
import ThemeSelector from "./ThemeSelector";
import ThemedComponent from "./ThemedComponent";

export const MyContext = createContext();

function MainComponent(){

    const[theme,setTheme]=useState('white');

    const contextValue = {
        theme,
        setTheme
    }
    return(
        <MyContext.Provider value={contextValue}>
            <ThemedComponent/>
            <ThemeSelector/>
        </MyContext.Provider>
    )
}

export default MainComponent;
