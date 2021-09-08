import './abc.css'

const List=(props)=>{
    const done=()=>{
        props.delete(props.name)
    }
    const done1=()=>{
        props.complate(props.name)
    }
    return(
        <div className="div">
        <div><h3>{props.name}</h3></div>
        
        <button style={{backgroundColor:"green"}} onClick={done1}>COMPLATE</button>
        <button style={{backgroundColor:"red"}} onClick={done}>DELETE</button>
        </div>
    )
}

export default List