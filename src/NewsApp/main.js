import Header from "./header"
import Card from "./card"
import axios from "axios"
import { useEffect, useState } from "react"

const Main=()=>{
   const [data,setdata]=useState([])
   useEffect(()=>{
    const getdata=async ()=>{
        const data=await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=1908f18795f14054853a91b92430fc3a')
        console.log(data.data.articles)
        setdata(data.data.articles)
   }
   getdata()
   },[])
   
    return(
        <div>
            <Header></Header>
            {
                data.map((val)=>{
                    return <Card title={val.title} about={val.description} image={val.urlToImage} url={val.url} source={val.source.name}></Card>
                })
            }
        </div>
    )
}


export default Main