import sos1 from "../../img/ambulance.png"
import { Navig } from "./Navig"

export let Sos = () => {
    return (
        <div className="bg-white" style={{minHeight: "100vh"}}>
            <Navig></Navig>
            <img src={sos1} style={{width:"30%"}} alt="sos1" />
            <h1 style={{textAlign:"center",color:"red"}}>Ambulance has been dispatched to your current location.</h1>
            <h2 style={{textAlign:"center",color:"red"}}>( 102 / 108 )</h2>
            
            <br/><br/>
            
            <h1 style={{textAlign:"center",color:"red"}}>Your contacts have been ALERTED.</h1>
        </div>
    )
}