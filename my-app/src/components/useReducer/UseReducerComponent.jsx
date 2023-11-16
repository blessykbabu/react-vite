import React ,{useReducer} from 'react'
const counterReducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT' :
            return {count:state.count+1};
        case 'DECREMENT':
                 return {count:state.count-1};
         default:
            return state;        
    }
}
const initialState={count:0}
function UseReduceCounter(){
    const [state,dispatch]=useReducer(counterReducer,initialState)
return(
    <>
    <p>Count:{state.count}</p>
    <button onClick={()=>dispatch({type:'INCREMENT'})}>increment</button>
    <button onClick={()=>dispatch({type:'DECREMENT'})}>decrement</button>
    </>
)
}
 export default UseReduceCounter;