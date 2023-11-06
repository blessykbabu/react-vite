import React ,{useRef} from "react";
function UncontrolledInput(){
    const inputRef=useRef(null);
    const handleButtonClick=()=>{
        alert(`Input Vlue:${inputRef.current.value}`);
    }
    return(
        <>
        <input type="text" ref={inputRef}/>
        <button onClick={handleButtonClick}>submit</button>
        
        
        </>
    )
}
export default UncontrolledInput
