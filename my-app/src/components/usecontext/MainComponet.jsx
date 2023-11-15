import {useContext,createContext,useState} from 'react'
export const MyContext=createContext();
import ThemeSelector from './ThemeSelector';
import ThemedComponent from './ThemedComponent';
function MainComponent(){
    cost[theme,setTheme]=useState('white')
    const contextValue={
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
export default MainComponent
