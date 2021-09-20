import { TextField } from "@material-ui/core"
import "./form.css"
import { Button } from "@material-ui/core"
import { useState } from "react"

const Form=(props)=>{
    const [data,setdata]=useState({
        name:"",
        age:"",
        address:""
    })

    const namec=(event)=>{
        // console.log(event.target.value)
        setdata({
            ...data,
            name:event.target.value
        })
    }

    const agec=(event)=>{
        // console.log(event.target.value)
        setdata({
            ...data,
            age:event.target.value
        })
    }

    const addressc=(event)=>{
        // console.log(event.target.value)
        setdata({
            ...data,
            address:event.target.value
        })
    }
    
    const senddata=(event)=>{
        event.preventDefault()
        props.datais(data)
        setdata({
            name:"",
            age:"",
            address:""
        })
    }
    return(
        <div>
            <form onSubmit={senddata}> 
                <TextField label="Name" color="secondary" value={data.name} required variant="outlined" className="TextField" onChange={namec}></TextField><br></br><br></br>
                <TextField type="number" label="Age" color="secondary" value={data.age} required variant="outlined" className="TextField" onChange={agec}></TextField><br></br><br></br>
                <TextField label="Address" color="secondary" value={data.address} required variant="outlined" className="TextField" onChange={addressc}></TextField><br></br><br></br><br></br>
                <Button variant="contained" color="secondary" type="submit">ADD DATA</Button>
            </form>
        </div>
    )
}


export default Form