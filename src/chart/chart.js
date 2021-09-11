import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"
import { Line } from "react-chartjs-2"
import { Pie } from "react-chartjs-2"
import './chart.css'

const Chart=()=>{
    const [data1,setdata]=useState([20])
    
    useEffect(()=>{
        setTimeout(() => {
            setdata([...data1,Math.random()*100])
        }, 2000);
    },[data1])
    const data={
        height:20,
        labels:data1,
        datasets:[{
            label:"first data",
            data:data1,
            fill:true,
            backgroundColor:"rgba(0,128,0,0.4)",
        },{
            label:"first data",
            data:data1,
            fill:true,
            backgroundColor:"rgba(0,110,0,0.4)",
        }]
    }
    return(
        <div className="ch">
        <h1>CHART JS</h1>
            <Line data={data}></Line>
            <Bar data={data}></Bar>
            <Pie data={data}></Pie>
            {/* <button onClick={add}>CLICK HERE</button> */}
        </div>
    )
}

export default Chart