import react, { useState } from "react";

const Animation=()=>{
    const [name,setname]=useState("pythonn devloper")
    const [color,setcolor]=useState('red')
    setInterval(()=>{
        if(name==="pythonn devloper"){
            setname("javascript devloper")
            setcolor('green')
        }else{
            setname("pythonn devloper")
            setcolor('red')
        }
    },2000)
    return(
        <h1 style={{color:color}}>this is jay rathod a {name}</h1>
    )
}


export default Animation