import { Bar } from "react-chartjs-2"
import { Line } from "react-chartjs-2"
import { Pie } from "react-chartjs-2"
import './chart.css'

const Chart=()=>{

    const data={
        height:20,
        labels:["1","2","3","4","5"],
        datasets:[{
            label:"first data",
            data:[10,20,30,10,20],
            fill:true,
            backgroundColor:"rgba(0,128,0,0.4)",
        },{
            label:"first data2",
            data:[100,200,300,100,200],
            backgroundColor:"rgba(0,128,0,0.2)",
        }]
    }
    return(
        <div className="ch">
        <h1>CHART JS</h1>
            <Line data={data}></Line>
            <Bar data={data}></Bar>
            <Pie data={data}></Pie>
        </div>
    )
}

export default Chart