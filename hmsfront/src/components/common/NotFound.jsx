import fof from "../../img/404.gif"
import { Navig } from "./Navig"

export let FourOFour = () => {
    return (
        <div className="bg-black" style={{minHeight: "100vh"}}>
            <Navig></Navig>
            <img src={fof} alt="404" />
        </div>
    )
}