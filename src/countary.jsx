import { useState } from "react"

export default function Counter(){
   

    // give User initial state & changable function like faceboook like cmnt
    const [count,setCount] =useState(0)
    const handleAdd = ()=>{
        const newcount = count +1;
        setCount(newcount);
    }
    return (
        <div style={{border:'2px solid yellow'}}>
           <h3>Counter:{count} </h3> 
           <button onClick={handleAdd}>add</button>
        </div>
    )
}