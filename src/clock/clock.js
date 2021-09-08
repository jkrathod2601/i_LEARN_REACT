import { useState } from 'react'
import classes from './ad.module.css'
import { useEffect } from 'react'
import { Switch } from '@material-ui/core'

const Clock=()=>{
    const [time,settime]=useState({
        hour:"",
        min:"",
        sec:""
    })
    const [colorh1,setcolorh1]=useState("white")
    const [c1,setc1]=useState(classes.done)

    const change=()=>{
        if(colorh1==="black"){
            setcolorh1("white")
        }else{
            setcolorh1("black")
        }

        if(c1===classes.done){
            setc1(classes.done1)
        }else{
            setc1(classes.done)
        }
    }
    useEffect(() => {
        setInterval(()=>{
            const date=new Date()
            settime({
                hour:date.getHours(),
                min:date.getMinutes(),
                sec:date.getSeconds(),
            })
        },1000)
    }, [])
    return(
        <div>
        <div className={c1}>
                <h1 style={{color:colorh1,fontSize:"20px"}}>DARK<Switch className={classes.switch} onChange={change} size="medium" color='default'></Switch>LIGHT</h1>
                <h1 >{time.hour}:{time.min}:{time.sec}</h1>
                <h2 style={{fontSize:"30px"}}>CREATED BY <span>JAYRAJ RATHOD</span></h2>
        </div>
                
        </div>
    )
}

export default Clock