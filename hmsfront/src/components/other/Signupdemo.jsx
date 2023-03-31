import { useState } from "react";
import bgimg from "../img/bg2.jpg";
import { Additional } from "./Additional";
import { Foot } from "./Foot";
import { Navig } from "./Navig";

export let Signupdemo = () => {

    const [rol , setRol] = useState("");
    const [vis , setVis] = useState("invisible");

    return (
        <div>
            <Navig></Navig>
            <div style={{backgroundImage: `url(${bgimg})`, height: "80vh", backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>
            <br />
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        </div>
                        <div className="col-6 border border-primary rounded bg-white">
                            
                            <h1 className="text-primary" style={{margin: "10px"}}><strong>Sign Up</strong></h1>
                            <hr style={{color: "blue"}}/>
                            
                            <form action="#" method="get">
                              <div class="mb-3">
                                <label for="city" class="form-label">City</label>
                                <select class="form-select form-select-lg" name="city" id="city" onClick={(v) => {setRol(v.target.value) ; setVis("visible")}}>
                                  <option selected>Select one</option>
                                  <option value="1">New Delhi</option>
                                  <option value="2">Istanbul</option>
                                  <option value="3">Jakarta</option>
                                </select>

                              </div> 

                              <div className={vis}>
                                <Additional rl={rol}></Additional>
                              </div>
                            </form>    

                        </div>
                        {/* <div className="col-3">
                        </div> */}
                    </div>
                </div>
            </div>
            <Foot></Foot>
        </div>
    );
}