import React , {useMemo, useState} from "react";


function ChildComponent({a,b}){
    const result = useMemo(()=>{
        console.log("Computing result......");
       
        return a*b;
    },[a,b]);
    return(
   
        <p>Result:{result}</p>
   
    )
}

function UseMemoComponent(){
    const [valueA,setvalueA] = useState(2);
    const [valueB,setValueB] = useState(3);
    return(
        <>
        <ChildComponent a={valueA} b={valueB}/>
        <button onClick={()=>setvalueA(valueA+1)}>IncrementA</button>
        <button onClick={()=>setValueB(valueB+1)}>IncrementB</button>
        </>
    )
}
export default UseMemoComponent;