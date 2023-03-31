import axios from "axios";
import bgimg from "../../img/bg4.jpg";
import userdpmale from "../../img/doctordp.jpg"
import userdpfemale from "../../img/doctordp2.jpg"
import { Navig } from "../common/Navig";
import { BsCalendarEvent, BsEnvelope, BsPhone } from "react-icons/bs";

import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";


export let Doctorview = (props) => {
    const navigate = useNavigate();

    const location = useLocation();
    const uid = location.state || {};
    console.log(uid["did"]);

    var ageDifMs = Date.now() - Date.parse(uid["did"]["dob"]);
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    const prof = useState("col-md-8");
    // const [updt, setUpdt] = useState("collapse");
    // const [but, setBut] = useState("button");
    // const [icon, setIcon] = useState(<BsFillPencilFill></BsFillPencilFill>);

    const [docapmt, setDocapmt] = useState([]);
    // const [page, setPage] = useState();




    const convDate = (d) => {
        const dt1 = Date.parse(d);
        const dt2 = new Date(dt1);
        const date = dt2.getDay() + "/" + dt2.getMonth() + "/" + dt2.getFullYear();
        return date;
    }

    const ht = window.innerHeight-40;
    const convTime = (d) => {
        const tm1 = Date.parse(d);
        const tm2 = new Date(tm1);
        const time = tm2.getHours() + ":" + tm2.getMinutes();
        return time;
    }

    useEffect(() => {
        getTreat();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getTreat = async () => {

        const result = await axios.get(props.p + `/getApmtByHid?hid=${uid["did"]["hospital"]["hid"]}`);
        console.log(result.data);

        setDocapmt(result.data);

    }

    return (
        <div>
            <Navig></Navig>
            <div style={{ backgroundImage: `url(${bgimg})`,height:ht, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="">
                    <br></br>
                    <button type="button" class="btn btn-primary" onClick={() => { navigate(-1) }}>Back</button>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-6">
                            <form action="" method="get">
                                <div className="card mt-3">

                                    <div className="container-fluid">
                                        <div className="row shadow">
                                            <div className="col-md-4">
                                                <div className="mt-3">
                                                    <img src={uid["did"]["gender"] === "Male" ? userdpmale : userdpfemale} className="img-fluid rounded-top bg-light" alt="userdp" />
                                                    <h3 className="mt-3 text-dark">{uid["did"]["dname"]}</h3>
                                                    <h5 className="text-muted">Doctor</h5>
                                                    <br />


                                                </div>

                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h4 className="card-title"><strong>Profile</strong></h4>
                                                    <div className="text-left">
                                                        <h6 style={{ textAlign: "left" }}>Personal Details:</h6>
                                                        <hr className="mt-1" />
                                                        <div style={{ textAlign: "left" }}>
                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <p>Age:</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p><strong><em>{age}</em></strong></p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <p>Gender:</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p><strong><em>{uid["did"]["gender"]}</em></strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <h6 style={{ textAlign: "left" }}>Contact Details:</h6>
                                                        <hr className="mt-1" />
                                                        <div style={{ textAlign: "left" }}>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <p><BsPhone></BsPhone>&ensp;Mobile No.:</p>
                                                                    <p><BsEnvelope></BsEnvelope>&ensp;E-Mail:</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p><strong><em>{uid["did"]["mobno"]}</em></strong></p>
                                                                    <p><strong><em>{uid["did"]["user"]["email"]}</em></strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <h6 style={{ textAlign: "left" }}>Address Details:</h6>
                                                        <hr className="mt-1" />
                                                        <div style={{ textAlign: "left" }}>
                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <p>Address:</p>
                                                                </div>
                                                                <div className="col-8">
                                                                    <p><strong><em>{uid["did"]["user"]["address"]}</em></strong></p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 rounded bg-white mt-3 shadow">
                            <div className="mt-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Current Appointments <BsCalendarEvent></BsCalendarEvent></h4>
                                    </div>
                                    <ul className="list-group list-group-flush" style={{ maxHeight: "360px", overflowY: "scroll" }}>

                                        {
                                            docapmt.map((a) => (
                                                <li className="list-group-item">
                                                    <p className="mb-1"><strong>Appointment by: {a["patient"]["pname"]}</strong></p>
                                                    <p className="text-muted mb-1">Treatment: {a["treatment"]["tname"]}</p>
                                                    <p className="text-muted mb-1">Date: {convDate(a["datetime"])} Time: {convTime(a["datetime"])}</p>
                                                    {/* <div class="d-grid gap-2">
                                                        <button type="button" name="" id="" class="btn btn-light border" onClick={() => { setPage(<History p={props.p} u={a["patient"]["user"]}></History>) }}>View Patient History</button>
                                                    </div> */}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1">

                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}