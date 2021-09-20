import Form from "./form"
import axios from "axios"

const Mainform=()=>{
    const senddata=async (val)=>{
        console.log(val)
        await axios({
            method: 'post',
            url: 'http://192.168.157.181:3001/adds',
            data:val
        }).then(()=>[
            console.log("data addesd")
        ]).catch(()=>{
            console.log("eroor found")
        })
    }
    return(
        <div>
            <Form datais={senddata}>
            </Form>
        </div>
    )
}

export default Mainform