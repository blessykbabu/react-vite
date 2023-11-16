import { useContext } from "react";
import { MyContext } from "./MainComponent";

function ThemeSelector(){

    const {setTheme} = useContext(MyContext);
    return(
        <>
        <button onClick={()=>
        setTheme('white')}>Light Theme</button>
        <button onClick={()=>
        setTheme('black')}>black Theme</button>
        </>
    )
}

export default ThemeSelector;