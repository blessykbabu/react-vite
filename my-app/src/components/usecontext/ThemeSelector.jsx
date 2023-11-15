import { useContext } from "react";
import { MyContext } from "./MainComponet";
function ThemeSelector(){
    const {setTheme}=useContext(MyContext);
    return(
        <>

        <button onClick={()=>setTheme('white')}>Light Theme</button>
        <button onClick={()=>setTheme('dark')}>Dark Theme</button>
        </>
    
    )
}
export default ThemeSelector