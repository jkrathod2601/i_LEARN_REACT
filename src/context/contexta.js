import { Name } from "../App"
import { useContext } from "react"
const Contexta=()=>{
    const namef=useContext(Name)
    return(
        // <Name.Consumer>{(x)=>{
        //     return <h1>this is jay's login detail{x}</h1>
        // }}
        // </Name.Consumer>
        <h1>this is jay's first name {namef}</h1>
    )
}

export default Contexta