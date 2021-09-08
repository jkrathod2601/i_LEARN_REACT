import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core"
import './all.css'

const Card=({title,about,image,url,source})=>{
    return(
        <div>
        <Accordion>
            <AccordionSummary><h3 style={{color:"black"}}><b>{title}</b></h3></AccordionSummary>
            <AccordionDetails>
            <div className="set">
            <img src={image}></img>
            <h3 >SOURCE <span style={{color:'blue'}}>{source}</span></h3>
            <div className="zoom"> <h4><b>ABOUT</b></h4>  {about} <br></br></div>
           
            <a href={url}>SOURCE <span style={{color:'red'}} >{url}</span></a>
            </div>
            </AccordionDetails>
        </Accordion>
        </div>
    )
}

export default Card