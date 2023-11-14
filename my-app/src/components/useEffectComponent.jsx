import React,{useEffect,useState} from 'react'
function UseEffectComponent(){
const[data,setData]=useState(null)

// useEffect(()=>{
//     console.log('component ')
// })
useEffect(()=>{    //useEffect function call after rendering the function
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.json()
    })
    .then((data=>{
        setData(data);
    }))
    .catch((error)=>{
        console.log("error fetching data:",error.message ? error.message :error)
    })
},[])




return(
    <>
    <h1>Datas</h1>
    {data ? <p>Data:{data.map((e)=>{
        return <p>{e.name}</p>
    })}</p> : <p>Loading.........</p>}
    
    </>
)
}
export default UseEffectComponent