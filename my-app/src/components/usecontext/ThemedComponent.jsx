import { useContext } from "react";
import { MyContext } from "./MainComponent";

function ThemedComponent(){
    const {theme} = useContext(MyContext);
    return <div style={{background:theme}}>Themed Component</div>
}

export default ThemedComponent;