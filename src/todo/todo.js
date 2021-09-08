import { useState } from "react/cjs/react.development";
import List from "./list";
import Add from "./add";
import Complate from "./complate";
const Todo=()=>{
   const [list,setlist]=useState(["jay","rathod","done"])
   const [clist,setclist]=useState([])
   const add=(val)=>{
       setlist([val,...list])
       console.log(list)
   }
   const removelist=(val)=>{
       let x=list.indexOf(val)
       console.log(x)
       let y=[...list]
       y.splice(x,1)
       setlist(y)
   }

   const addto=(val)=>{
       setclist([val,...clist])
       let x=list.indexOf(val)
       console.log(x)
       let y=[...list]
       y.splice(x,1)
       setlist(y)
   }
    return(<div>
        <h1>this is todo list using react</h1>
        <Add namel={add}></Add>
        {
            list.map((val)=>{
                return <List name={val} delete={removelist} complate={addto} key={Math.random()}></List>
            })
        }
        <h2>this task has benn complated</h2>
        {
            clist.map((val)=>{
                return <Complate name={val}></Complate>
            })
        }
        </div>
    )
}

export default Todo