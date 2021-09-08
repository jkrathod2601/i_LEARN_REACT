import { useState } from "react/cjs/react.development"
import './abc.css'

const Add=(props)=>{
    const [val,setval]=useState("")
    const [cheak,setcheak]=useState(false)
    const datac=(event)=>{
        if(event.target.value.length>0){
            setcheak(true)
        }else{
            setcheak(false)
        }
        setval(event.target.value)
    }
    const adddata=(event)=>{
        event.preventDefault()
        props.namel(val)
        setval("")
        setcheak(false)
    }
    return(
        <form onSubmit={adddata}>
            <input onChange={datac} value={val} placeholder="min 1 character is requierd"></input><br></br>
            { cheak &&<button className="b1">ADD DATA</button>}
        </form>
    )
}

export default Add