import React ,{useState} from "react";

const Childcomponent=React.memo(({message})=>{
    console.log("Child component rendering...");
    return(
        <>
        <div>{message}</div>
        </>
    )
});

function ParentComponent(){

    console.log("Parent Component Rendering...");

    const [count,setCount] = useState(1);
    return(
        <>
        <Childcomponent message={"Hello woeld"}/>
        <p>
            Count:{count}
        </p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}

export default ParentComponent;