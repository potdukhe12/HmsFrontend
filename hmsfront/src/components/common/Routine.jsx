import sos1 from "../../img/Daily-Routine-Timetable-.jpg"
import { Navig } from "./Navig"

export let Routine = () => {
    return (
        <div className="bg-white" style={{minHeight: "100vh"}}>
            <Navig></Navig>
            <img src={sos1} style={{width:"60%"}} alt="sos1" />
            <div class="col-3"></div>
            <div class="col-6">

            </div>
            <div class="col-3"></div>

        </div>
    )
}