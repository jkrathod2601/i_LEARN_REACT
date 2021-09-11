import { useState } from "react"
// import { useEffect } from "react"


const Timer=()=>{
    const [data,setdata]=useState(10)
    setdata(30)
    return(
        <div>{data}</div>
    )   
}


export default Timer