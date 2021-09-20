import { useState } from "react"
import First from "./first"
import Second from "./second"

const Main=()=>{
    const [love,setlove]=useState(true)
    const firstc=()=>{
        setlove(true)
    }
    const secondc=()=>{
        setlove(false)
    }
    return(
        <div>
            <button onClick={firstc} style={{color:"green"}}>first</button><br></br>
            <button onClick={secondc}>Second</button><br></br>
            {love && <First></First>}
            {!love && <Second></Second>}
        </div>
    )
}

export default Main

