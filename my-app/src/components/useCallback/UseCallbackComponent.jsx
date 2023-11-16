import React,{useCallback,useState} from 'react'
function UseCallbackComponent(){
    const[count,setCount]=useState(0);
    const handleClick=useCallback(()=>{   //these callback function save in a memory space ,it didn't rendering each time.benefit:code optimization
        setCount(count+1);

    },[count]);
    return(
        <div>
            <p>Count:{count}</p>
            <ChildComponent onClick={handleClick}/>
        </div>
    )
}
function ChildComponent({onClick}){
    return <button onClick={onClick}>increment</button>
}
export default UseCallbackComponent