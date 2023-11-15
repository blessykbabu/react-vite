import {useContext,createContext} from 'react';


const MyContext=createContext('default');

function ComponentA(){
    const contextValue=useContext(MyContext);
    return <div>Component A:{contextValue}</div>
}
function ComponentB(){
    const contextValue=useContext(MyContext);
    return <div>Component B:{contextValue}</div>
}
function useContextComponent(){
    return (
        <MyContext.Provider value='Helo world'>
            <ComponentA/>
            <ComponentB/>
            </MyContext.Provider>

    )
}
export default useContextComponent
