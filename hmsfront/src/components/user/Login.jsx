import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

import bgimg from "../../img/bg2.jpg";
import { Foot } from "../common/Foot";
import { Navig } from "../common/Navig";
import Footer from "../common/Footer";
// import { Userhome } from "../patient/Patienthome";

export const Uinfo = createContext();

export let Login = (props) => {

    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [pass, setPass] = useState("");

    // const [uidd, setUidd] = useState("");

    const [validate, setValidate] = useState("");

    // useEffect(() => {
    //     getUser();
    // }, []);


    const getUser = async (id, pass) => {
        const result = await axios.get(props.p + "/getAll");
        // console.log("Hello!");
        // console.log(result.data);

        let flag = false;
        for (let key in result.data) {

            if (result.data[key]["uname"] === id && result.data[key]["pwd"] === pass) {
                flag = true;
                // console.log(result.data);
                // console.log(resurve.data);
                // setUidd(result.data[key]["uid"]);
                switch (result.data[key]["role"]) {
                    case "1":
                        const reserve1 = await axios.get(props.p + `/getPatient?uid=${result.data[key]["uid"]}`)
                        navigate(`../patient-home`, { state: { uid: result.data[key], pid: reserve1.data } });
                        break;
                    case "2":
                        const reserve2 = await axios.get(props.p + `/getDoctor?uid=${result.data[key]["uid"]}`)
                        navigate(`../doctor-home`, { state: { uid: result.data[key], did: reserve2.data } });
                        break;
                    case "3":
                        const reserve3 = await axios.get(props.p + `/getHospitalByUid?uid=${result.data[key]["uid"]}`)
                        navigate(`../hospital-home`, { state: { uid: result.data[key], hid: reserve3.data } });
                        break;
                    case "4":
                        const reserve4 = await axios.get(props.p + `/getAdminID?uid=${result.data[key]["uid"]}`)
                        navigate(`../admin-home`, { state: { uid: result.data[key], aid: reserve4.data } });
                        break;
                    default:
                        navigate(`../`, { state: { uid: result.data[key] } });
                        break;
                }




                // navigate(`../${role}-home`,{state:{uid: result.data[key], pid: reserve.data, r1: res1.data}});
            }
            // console.log(result.data[key]["uid"]);
        }
        if (!flag) {
            setValidate("Wrong user id or password! Try again.")
        }
        // console.log("Bye!");
    }


    return (
        <div>
            <Navig></Navig>
            <div style={{ backgroundImage: `url(${bgimg})`, height: "75vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <br />
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        </div>
                        <div className="col-6 border border-primary rounded bg-white shadow">

                            <h1 className="text-primary" style={{padding:"5px 0 0 0"}}><strong>Login</strong></h1>
                            <hr style={{ color: "green" }} />

                            <form>

                                <div className="mb-3">
                                    <label for="uid" className="form-label"><strong>User Id</strong></label>
                                    <input type="text" className="form-control" name="uid" id="uid" placeholder="Enter your UID" onChange={(v) => { setId(v.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <label for="pwd" className="form-label"><strong>Password</strong></label>
                                    <input type="password" className="form-control" name="pwd" id="pwd" placeholder="Enter your Password" onChange={(v) => { setPass(v.target.value) }} />
                                </div>
                                <button type="button" className="btn btn-primary mb-3" onClick={() => { getUser(id, pass) }}>Login</button>
                                &nbsp;
                                <button type="reset" className="btn btn-primary mb-3">Clear</button>
                                <p className="text-danger">{validate}</p>
                            </form>
                            <div className="mb-3">
                                <a href="/signup" style={{ textUnderlineOffset: "3px" }}>Don't have an account? Sign Up</a>
                            </div>
                        </div>
                        {/* <div className="col-2">
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}